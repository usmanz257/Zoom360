using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using CNS.ZOOM360.Entities.StoreProcedures.Connectors.Databases.SQL;
using CNS.ZOOM360.Entities.StoreProcedures.sourceDescriptionAndConfiguration;
using CNS.ZOOM360.Entities.StoreProcedures.SourceDescriptionAndConfiguration;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.SourceDescriptionAndConfiguration;
using CNS.ZOOM360.Shared.StoreProcedures.SourceDestination;
using Microsoft.AspNetCore.Mvc;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.SourceDestination.RouteName)]
    [ApiController]
    public class DestinationController : Controller
    {
        private readonly IDestination _sourcedescription;
        private readonly ILoggerManager _logger;
        public DestinationController(IDestination sourcedescription, ILoggerManager logger)
        {
            _sourcedescription = sourcedescription;
            _logger = logger;
        }
        [Route(ServiceConstants.SourceDestination.saveDescriptionInfo)]
        [HttpPost]
        public async Task<IActionResult> saveDescriptionInfo(sourceCommonModel InputModel)
        {
            var sourceVmessageData = _sourcedescription.SavedestinationDescription(InputModel);
            if (sourceVmessageData.Result == null)
            {
                _logger.LogError("");
                return NotFound(sourceVmessageData);
            }

            return Ok(sourceVmessageData.Result);
        }
        [Route(ServiceConstants.SourceDestination.saveDbCredentialInfo)]
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
                var SaveCredential = _sourcedescription.SaveDBCredentials(accountmodel);
                msg = SaveCredential.Result;
            }
            if (msg == null)
            {
                _logger.LogError("");
                return NotFound(msg);
            }

            return Ok(msg);
        }
    }
}