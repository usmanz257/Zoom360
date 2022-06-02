using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using Microsoft.AspNetCore.Mvc;
 
using CNS.ZOOM360.Shared.StoreProcedures.SourceDescriptionAndConfiguration;
using CNS.ZOOM360.Entities.StoreProcedures.SourceDescriptionAndConfiguration;
using CNS.ZOOM360.Entities.StoreProcedures.Connectors.Databases.SQL;
using CNS.ZOOM360.Entities.StoreProcedures.sourceDescriptionAndConfiguration;
using System.Reflection;
using System.IO;
using System.Net.Http.Headers;
using System.Net;
using System.Net.Mail;
using System.Security.Authentication;
using Google.Apis.Drive.v3;
using Google.Apis.Auth.OAuth2;
using System.Threading;
using Google.Apis.Util.Store;
using Google.Apis.Services;
using Microsoft.AspNetCore.Hosting;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.SourceDescAndConfiration.RouteName)]
    [ApiController]
    public class SourceDescriptionAndConfigurtionController:ControllerBase
    {
        private readonly ISourceDescriptionAndConfiguration _sourceConfiguration ;
        private readonly ILoggerManager _logger;
        private IWebHostEnvironment _hostingEnvironment;



        public SourceDescriptionAndConfigurtionController(ISourceDescriptionAndConfiguration sourceDescandConfiguration, ILoggerManager logger , IWebHostEnvironment environment)
        {
            _sourceConfiguration = sourceDescandConfiguration;
          _logger = logger;
            _hostingEnvironment = environment;




 


        }
        [Route(ServiceConstants.SourceDescAndConfiration.saveDescriptionInfo)]
        [HttpPost]
        public async Task<IActionResult> saveDescriptionInfo(sourceCommonModel InputModel)
        {
            var sourceVmessageData = _sourceConfiguration.SaveSourceDescriptionAndConfiguration(InputModel);
            if (sourceVmessageData.Result == null)
            {
                _logger.LogError("");
                return NotFound(sourceVmessageData);
            }

            return Ok(sourceVmessageData.Result);
        }

        [Route(ServiceConstants.SourceDescAndConfiration.saveDbCredentialInfo)]
        [HttpPost]
        public async Task<IActionResult> saveDbCredentialInfo(DBCredentialSourceDescriptonAndConfigModel DbAccount)
        {
            string msg = "";
            Type myClassType = DbAccount.sOURCE_CNF.GetType();
            PropertyInfo[] properties = myClassType.GetProperties();
            SourceAccountConnectionModel accountmodel = new SourceAccountConnectionModel();
            accountmodel.UserId = DbAccount.SourceCommonModel.userId;
            accountmodel.WorkspaceId = DbAccount.SourceCommonModel.workspaceId;
            accountmodel.ClientId = DbAccount.SourceCommonModel.clientId;
            accountmodel.Connector_ID = DbAccount.SourceCommonModel.connectorId;
            accountmodel.Account_Id = DbAccount.SourceCommonModel.AccountId;
            foreach (PropertyInfo property in properties)
            {
                //property.Name 
                accountmodel.HostName = property.Name;
                accountmodel.FieldValue = property.GetValue(DbAccount.sOURCE_CNF, null);
               var SaveCredential = _sourceConfiguration.SaveDBCredentials(accountmodel);
                msg = SaveCredential.Result;
             }
            if (msg == null)
            {
                _logger.LogError("");
                return NotFound(msg);
            }

            return Ok(msg);
        }

        [Route(ServiceConstants.SourceDescAndConfiration.savefile)]
        [HttpPost , DisableRequestSizeLimit]
        public IActionResult savefile(string UserId, string WORKSPACEID, string CLIENTID, string ConnectorId, string AccountId)
        {
            SourceAccountConnectionModel accountmodel = new SourceAccountConnectionModel();
            try
            {
                var file = Request.Form.Files[0];
                var folderName = Path.Combine("Resources", "files");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                if (file.Length > 0)
                {
                  
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                        var filereading = file.OpenReadStream();
                    }
                    accountmodel.UserId = UserId;
                    accountmodel.ClientId = CLIENTID;
                    accountmodel.Account_Id = AccountId;
                    accountmodel.Connector_ID = ConnectorId;
                    accountmodel.WorkspaceId = WORKSPACEID;
                    accountmodel.HostName = fileName;
                    accountmodel.FieldValue = fullPath;
                    var list = _sourceConfiguration.SaveFileInfo(accountmodel);
                    return Ok(new { list });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }


        [Route(ServiceConstants.SourceDescAndConfiration.saveSocialMedia)]
        [HttpPost]
        public async Task<IActionResult> saveSocialMedia(SocialMediaModel socialmedia)
        {
            var saveSocalMedia = _sourceConfiguration.SaveSocialMediaInfo(socialmedia);
            if (saveSocalMedia.Result == null)
            {
                _logger.LogError("");
                return NotFound(saveSocalMedia);
            }
            try
            {

                MailMessage message = new MailMessage();
                SmtpClient smtp = new SmtpClient();
                message.From = new MailAddress("cnszoom360@gmail.com");
                message.To.Add(new MailAddress("mazeem4220@gmail.com"));
                message.Subject = "Test";
                message.IsBodyHtml = true;
                message.Body = "test";

                //saveSocalMedia + "<br><br><button><a href='' value='" + socialmedia.Email + "' style='text-decoration:none;color:rgb(33, 155, 156);'>Authorize</a></button> ";
                smtp.Port = 587;
                smtp.EnableSsl = true;
                smtp.Host = "smtp.gmail.com";
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = new NetworkCredential("cnszoom360@gmail.com", "cnse@12345");
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtp.Send(message);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return Ok(saveSocalMedia.Result);
        }
        //Google Drive
        public static string[] Scopes = { DriveService.Scope.Drive };
        private static DriveService GetService()
        {
            //get Credentials from client_secret.json file 
            UserCredential credential;
            //Root Folder of project 
            //using (var stream = new FileStream(Path.Combine("Assests", "client_secret_700418113275-jt71fmbvi3m9gfip068fub3qc0br3nsd.apps.googleusercontent.com.json"), FileMode.Open, FileAccess.Read))
            using (var stream = new FileStream(@"E:\client_secret.json", FileMode.Open, FileAccess.Read))
            {
                string FilePath = Path.Combine("Assests", "DriveServiceCredential.json");
                credential = GoogleWebAuthorizationBroker.AuthorizeAsync(
                    GoogleClientSecrets.Load(stream).Secrets,
                    Scopes,
                    "user",
                    CancellationToken.None,
                    new FileDataStore(FilePath, true)).Result;
            }
            //create Drive API service.
            DriveService service = new DriveService(new BaseClientService.Initializer()
            {
                HttpClientInitializer = credential,
                ApplicationName = "Zoom360",
            });
            return service;
        }



        [Route(ServiceConstants.SourceDescAndConfiration.UploadFIle)]

        [HttpPost, DisableRequestSizeLimit]
        public void FileUpload()

        {
            var file = Request.Form.Files[0];
            if (file != null && file.Length > 0)
            {
                DriveService service = GetService();
                //DriveService service = GetDriveServiceInstance();
                string webRootPath = _hostingEnvironment.ContentRootPath;
                //string path = @"E:\real me.PNG";
                //string path = Path.Combine(webRootPath, "Resources\\files", file.FileName);
                var folderName = Path.Combine("Resources", "files");
                var fileserversavepath = Path.Combine(folderName, file.FileName);
                ////Path.GetFileName(file.FileName));
                using (var stream = new FileStream(fileserversavepath, FileMode.Create))
                {
                    file.CopyTo(stream);
                //    var filereading = file.OpenReadStream();
                }
                //file.SaveAs(path);


                //var folderName = Path.Combine("Resources", "files");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                var fullPath = Path.Combine(pathToSave, fileName);
                var path = Path.Combine(folderName, fileName);

                var FileMetaData = new Google.Apis.Drive.v3.Data.File();
                FileMetaData.Name = Path.GetFileName(file.FileName);
                //FileMetaData.MimeType = MimeKit.MimeTypes.GetMimeType(path);
                //FileMetaData.MimeType = "image/png";
                FileMetaData.MimeType = file.ContentType;

                //FileMetaData.MimeType = MimeMapping.GetMimeMapping(path);

                FilesResource.CreateMediaUpload request;

                using (var stream = new FileStream(path, FileMode.Open))
                {
                    request = service.Files.Create(FileMetaData, stream, FileMetaData.MimeType);
                    request.Fields = "id";
                    request.Upload();
                }

            }

        }
    }
    

}