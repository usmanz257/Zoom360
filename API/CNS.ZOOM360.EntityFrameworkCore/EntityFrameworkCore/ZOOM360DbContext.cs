using CNS.ZOOM360.Entities;
using CNS.ZOOM360.Entities.Configuration;
using CNS.ZOOM360.Entities.Model;
using CNS.ZOOM360.Entities.StoreProcedures;
using CNS.ZOOM360.Entities.StoreProcedures.AIinsights;
using CNS.ZOOM360.Entities.StoreProcedures.AllExtract;
using CNS.ZOOM360.Entities.StoreProcedures.CalenderSetup;
using CNS.ZOOM360.Entities.StoreProcedures.ChangeLog;
using CNS.ZOOM360.Entities.StoreProcedures.Common;
using CNS.ZOOM360.Entities.StoreProcedures.ConnectionStatus;
using CNS.ZOOM360.Entities.StoreProcedures.Connectors.Databases.SQL;
using CNS.ZOOM360.Entities.StoreProcedures.CurrencySetup;
using CNS.ZOOM360.Entities.StoreProcedures.DataGovernance;
using CNS.ZOOM360.Entities.StoreProcedures.DisplaySettings;
using CNS.ZOOM360.Entities.StoreProcedures.DynamicGridStructure;
using CNS.ZOOM360.Entities.StoreProcedures.DynamicMenu;
using CNS.ZOOM360.Entities.StoreProcedures.GridAndGraphData;
using CNS.ZOOM360.Entities.StoreProcedures.IdentityAccessManagment;
using CNS.ZOOM360.Entities.StoreProcedures.Load;
using CNS.ZOOM360.Entities.StoreProcedures.NumeralSetup;
using CNS.ZOOM360.Entities.StoreProcedures.Prepare;
using CNS.ZOOM360.Entities.StoreProcedures.QuotaSettings;
using CNS.ZOOM360.Entities.StoreProcedures.SourceDescriptionAndConfiguration;
using CNS.ZOOM360.Entities.StoreProcedures.SourceEdit;
using CNS.ZOOM360.Entities.StoreProcedures.TimeLineStatus;
using CNS.ZOOM360.Entities.StoreProcedures.TreeControlTemplate;
using CNS.ZOOM360.Entities.StoreProcedures.UserAccessManagment;
using CNS.ZOOM360.Entities.StoreProcedures.UserTemplateInfo;
using CNS.ZOOM360.Entities.StoreProcedures.Workspace;
using CNS.ZOOM360.Entities.TimeZoneSetup;
using MySql.Data.MySqlClient;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ZOOM360.Charts.Model;
using System.Data;
using CNS.ZOOM360.Entities.StoreProcedures.Predictions;
using System;

namespace CNS.ZOOM360.EntityFrameworkCore
{
    public class ZOOM360DbContext: DbContext
    {
        /* Define an IDbSet for each entity of the application */

        public virtual DbSet<Workbook> Workbooks { get; set; }
        public virtual DbSet<Page> Pages { get; set; }
        public virtual DbSet<Widget> Widget { get; set; }
        public virtual DbSet<Measure> Measure { get; set; }
        public virtual DbSet<Dimension> Dimension { get; set; }
        public virtual DbSet<Layout> Layouts { get; set; }
        public virtual DbSet<PageProperties> PageProperties { get; set; }
        public virtual DbSet<Query> Queries { get; set; }
        public virtual DbSet<Filters> Filters { get; set; }
        public virtual DbSet<Employee> emplyee { get; set; }

        public virtual DbSet<WorkspaceSetup> workspaceSpModal { get; set; }

        public ZOOM360DbContext(DbContextOptions<ZOOM360DbContext> options)
            : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new RoleConfiguration());

            modelBuilder.Entity<Employee>(b => { });
            //modelBuilder.Entity<ChildWorkspaces>(
            //    ex => { ex.HasNoKey(); }
            //    )  ;
            modelBuilder.Entity<FiltersSource>(
                ex => { ex.HasNoKey(); }
                );
            modelBuilder.Entity<ChildWorkspacesModel>(
                ex => { ex.HasNoKey(); }
                );
            modelBuilder.Entity<WorkspaceSetup>(
                ex => { ex.HasNoKey(); }
                );
            modelBuilder.Entity<WorkspaceSetupList>(
               ex => { ex.HasNoKey(); }
               );
            
            modelBuilder.Entity<DropdownList>(
               ex => { ex.HasNoKey(); }
               );
            modelBuilder.Entity<UAMDropdownListModel>(
              ex => { ex.HasNoKey(); }
              );
            modelBuilder.Entity<CalenderSetupModel>(
               ex => { ex.HasNoKey(); }
               );
            modelBuilder.Entity<CurrencySetupModel>(
               ex => { ex.HasNoKey(); }
               );

            modelBuilder.Entity<DataGovernanceModel>(
               ex => { ex.HasNoKey(); }
               );
            modelBuilder.Entity<UserLogModel>(
      ex => { ex.HasNoKey(); }
      );

            modelBuilder.Entity<DisplaySettingsModel>(
               ex => { ex.HasNoKey(); }
               );

            modelBuilder.Entity<NumeralSetupModel>(
               ex => { ex.HasNoKey(); }
               );
            //modelBuilder.Entity<CustomScriptsModel>(
            //   ex => { ex.HasNoKey(); }
            //   );

            modelBuilder.Entity<QuotaSettingsModel>(
               ex => { ex.HasNoKey(); }
               );

            modelBuilder.Entity<TimeZoneSetupModel>(
               ex => { ex.HasNoKey(); }
               );

            modelBuilder.Entity<ChangeLogListModel>(
               ex => { ex.HasNoKey(); }
               );

            modelBuilder.Entity<AllExtractListModel>(
               ex => { ex.HasNoKey(); }
               );
            modelBuilder.Entity<AllIssuesModel>(
               ex => { ex.HasNoKey(); }
               );

            modelBuilder.Entity<ConnectionListModel>(
              ex => { ex.HasNoKey(); }
              );

            modelBuilder.Entity<SourceListModel>(
              ex => { ex.HasNoKey(); }
              );
            modelBuilder.Entity<MainMenuModel>(
                ex => { ex.HasNoKey(); }

                );
            modelBuilder.Entity<UserTemplateInfoModel>(
               ex => { ex.HasNoKey(); }

               );
            modelBuilder.Entity<TreeTemplateGrid>(
               ex => { ex.HasNoKey(); }
               );
          modelBuilder.Entity<PredictionReachModel>(
            ex => { ex.HasNoKey(); }
                );
            modelBuilder.Entity<ProductionProcessModel>(
         ex => { ex.HasNoKey(); }
               );
            modelBuilder.Entity<SubMenuSectionItemsModel>(
              ex => { ex.HasNoKey(); }
              );
            modelBuilder.Entity<SubMenusectionModel>(
              ex => { ex.HasNoKey(); }
              );
            modelBuilder.Entity<ConnectionLogModel>(
              ex => { ex.HasNoKey(); }
              );
            modelBuilder.Entity<GraphDataModel>(
              ex => { ex.HasNoKey(); }
              );
            modelBuilder.Entity<GridDataModel>(
             ex => { ex.HasNoKey(); }
             );
            modelBuilder.Entity<FieldMappingRuleTemplateModel>(
             ex => { ex.HasNoKey(); }
             );
            modelBuilder.Entity<SaveSourceFieldMappingRuleTemplateModel>(
            ex => { ex.HasNoKey(); }
            );

            modelBuilder.Entity<GetColumnsAiInsightsModel>(
         ex => { ex.HasNoKey(); }
         );
            
            modelBuilder.Entity<SaveUserAccessManagementModel>(
       ex => { ex.HasNoKey(); }
       );
            modelBuilder.Entity<UserListModel>(
       ex => { ex.HasNoKey(); }
       );
            modelBuilder.Entity<TreeDropDownParentModel>(
        ex => { ex.HasNoKey(); }
        );
            modelBuilder.Entity<MarketingStrategyModel>(
    ex => { ex.HasNoKey(); }
    );
            modelBuilder.Entity<TreeDropDownChildModel>(
        ex => { ex.HasNoKey(); }
        );
            modelBuilder.Entity<DataSourceListModel>(
      ex => { ex.HasNoKey(); }
      );
            modelBuilder.Entity<ColumnHeaderTextModel>(
      ex => { ex.HasNoKey(); }
      );
            modelBuilder.Entity<TemplateListModel>(
    ex => { ex.HasNoKey(); }
    );
            modelBuilder.Entity<TemplateModel>(
    ex => { ex.HasNoKey(); }
    );
            modelBuilder.Entity<MainmenuRightsModel>(
   ex => { ex.HasNoKey(); }
   );
            modelBuilder.Entity<GetTImeLineDataModel>(
ex => { ex.HasNoKey(); }
);
            modelBuilder.Entity<LineGraphDataModel>(
 ex => { ex.HasNoKey(); }
 );
            modelBuilder.Entity<GetAiInsightsModel>(
               ex => { ex.HasNoKey(); }
               );
            modelBuilder.Entity<AIinsightWidgetDataModel>(
               ex => { ex.HasNoKey(); }
               );
            modelBuilder.Entity<GetAIWidgetGraphDataModel>(
               ex => { ex.HasNoKey(); }
               ); 
            modelBuilder.Entity<DropDownWithCategoryModel>(
               ex => { ex.HasNoKey(); }
                       );
            modelBuilder.Entity<GetColumnsAiInsightsModel>(
                ex => { ex.HasNoKey(); }
                );
            modelBuilder.Entity<TreeControlModel>(
                ex => { ex.HasNoKey(); }
                );
            //// Today
            modelBuilder.Entity<TreeTemplateQueryModel>(
          ex => { ex.HasNoKey(); }
          );
            ///// End
            // Umer Work
            //modelBuilder.Entity<SourceAccountConnectionModel>(
            //  ex => { ex.HasNoKey(); }
            //  );
            //modelBuilder.Entity<EmailAuthenticationSourceAccount>(
            //  ex => { ex.HasNoKey(); }
            //  );
            //modelBuilder.Entity<SourceAccountModel>(
            //  ex => { ex.HasNoKey(); }
            //  );
            modelBuilder.Entity<UpdateConnectorListStep2>(
              ex => { ex.HasNoKey(); }
              );
            modelBuilder.Entity<GEtSourceObjectList>(
              ex => { ex.HasNoKey(); }
              );  
            modelBuilder.Entity<SourceObjectModel>(
              ex => { ex.HasNoKey(); }
              );
            modelBuilder.Entity<UpdateSourceObjectGridModel>(
              ex => { ex.HasNoKey(); }
              );
            modelBuilder.Entity<EntityObjectFieldsList>(
              ex => { ex.HasNoKey(); }
              );
            //modelBuilder.Entity<ExtractModel>(
            //  ex => { ex.HasNoKey(); }
            //  );
            modelBuilder.Entity<DataQualityModel>(
             ex => { ex.HasNoKey(); }
             ); 
             modelBuilder.Entity<LookupListModel>(
             ex => { ex.HasNoKey(); }
             ); 
             modelBuilder.Entity<SourceTableListModel>(
             ex => { ex.HasNoKey(); }
             ); 
              modelBuilder.Entity<ObjectListModelForLookupInsert>(
             ex => { ex.HasNoKey(); }
             );
            modelBuilder.Entity<DestinationList>(
           ex => { ex.HasNoKey(); }
           );
            modelBuilder.Entity<UserLoginInfomartionModel>(
         ex => { ex.HasNoKey(); }
         );
            //modelBuilder.Entity<sourceCommonModel>(
            //  ex => { ex.HasNoKey(); }
            //  );
            //Dynamic dashboard
            modelBuilder.Entity<Workbook>(

              );

            modelBuilder.Entity<Page>(

              );
            modelBuilder.Entity<Widget>(

              );
            modelBuilder.Entity<Dimension>(

              );
            modelBuilder.Entity<Measure>(

              );

            modelBuilder.Entity<Layout>(

              );
            modelBuilder.Entity<PageProperties>(

              );
            modelBuilder.Entity<Query>(x => x.ToTable("Query"));
        }
    
    }
}
