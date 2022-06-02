using CNS.ZOOM360.Entities.Model;
using CNS.ZOOM360.Entities.StoreProcedures.Common;
using CNS.ZOOM360.Entities.StoreProcedures.Prepare;
using CNS.ZOOM360.Entities.StoreProcedures.SourceDescriptionAndConfiguration;
using CNS.ZOOM360.Shared.StoreProcedures.Prepare.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.Prepare
{
   public interface IPrepare
    {

        Task<List<DataQualityModel>> GetDataQualitylist(DataQualityParamsModel ListInputmodel);
        Task<List<LookupListModel>> GetLookuplist(LookuplistParamsModel ListInputmodel);
        Task<List<DropdownList>> GetSourceAccountlist(sourceCommonModel inpoutModel);
        Task<List<SourceTableListModel>> GetSourceTablelist(sourceCommonModel inpoutModel,string DBName,string MappedTable);
        Task<List<ObjectListModelForLookupInsert>> GetSourceObjectlist(sourceCommonModel inpoutModel, string DBName, string ObjectName);
        Task<string> SaveLookup(LookupArray InputModel, string User_id, string Client_id, string workspace_id, string tablevalues);
        Task<string> GenerateCustomTable(customeTableModel customTable); 
        Task<string> InsertionOption(InsertionOptionModel customTable);
        Task<string> Addlookup(LookupArray inpoutModel);
        Task<string> SaveDatalabeling(SaveDataLabelingInputModel inputModel);
        //Task<List<RecentDashBordModel>> GetAllConnections(string ACCOUNT_ID, string UserId, string getConnections, string WORKSPACE_ID, string CLIENT_ID, string WORKSPACE_NAME, string CONNECTION_NAME, string SOURCE_NAME, string ACCESS_GRANTED, string CREATED_BY, string IS_ACTIVE, string DESTINATION_ENABLED, string LAST_ACCESSED);





    }
}
