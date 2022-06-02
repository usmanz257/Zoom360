using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AspNetCoreRateLimit;
using AutoMapper;
using CNS.ZOOM360.Shared.Authentication;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.Workspace;
using CNS.ZOOM360.Services.StoreProcedures.Workspace;
using CNS.ZOOM360.EntityFrameworkCore;
using CNS.ZOOM360.EntityFrameworkCore.Repositories;
using CNS.ZOOM360.Host.ActionFilters;
using CNS.ZOOM360.Host.Authentication;
using CNS.ZOOM360.Host.Extentions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using NLog;
using CNS.ZOOM360.Shared.StoreProcedures.CalenderSetup;
using CNS.ZOOM360.Services.StoreProcedures.CalenderSetup;
using CNS.ZOOM360.Shared.StoreProcedures.CurrencySetup;
using CNS.ZOOM360.Services.StoreProcedures.CurrencySetup;
using CNS.ZOOM360.Shared.StoreProcedures.DataGovernance;
using CNS.ZOOM360.Services.StoreProcedures.DataGovernance;
using CNS.ZOOM360.Shared.StoreProcedures.DisplaySettings;
using CNS.ZOOM360.Services.StoreProcedures.DisplaySettings;
using CNS.ZOOM360.Shared.StoreProcedures.NumeralSetup;
using CNS.ZOOM360.Services.StoreProcedures.NumeralSetup;
using CNS.ZOOM360.Shared.StoreProcedures.QuotaSettings;
using CNS.ZOOM360.Services.StoreProcedures.QuotaSettings;
using CNS.ZOOM360.Shared.StoreProcedures.TimeZoneSetup;
using CNS.ZOOM360.Services.StoreProcedures.TimeZoneSetup;
using CNS.ZOOM360.Shared.StoreProcedures.ChangeLog;
using CNS.ZOOM360.Services.StoreProcedures.ChangeLog;
using CNS.ZOOM360.Services.StoreProcedures.AllExtract;
using CNS.ZOOM360.Shared.StoreProcedures.AllExtract;
using CNS.ZOOM360.Services.StoreProcedures.Common;
using CNS.ZOOM360.Shared.StoreProcedures.Common;
using CNS.ZOOM360.Shared.StoreProcedures.DynamicMenu;
using CNS.ZOOM360.Services.StoreProcedures.DynamicMenu;
using CNS.ZOOM360.Shared.StoreProcedures.Connector.Database.SQL;
using CNS.ZOOM360.Services.StoreProcedures.Connectors.Databases.SQL;
using CNS.ZOOM360.Shared.StoreProcedures.ConnectionStatus;
using CNS.ZOOM360.Services.StoreProcedures.ConnectionStatus;
using CNS.ZOOM360.Shared.StoreProcedures.GridAndGraphData;
using CNS.ZOOM360.Services.StoreProcedures.GridAndGraphData;
using CNS.ZOOM360.Shared.StoreProcedures.SourceEdit;
using CNS.ZOOM360.Services.StoreProcedures.SourceEdit;

using CNS.ZOOM360.Shared.StoreProcedures.IdentityAccessManagment;
using CNS.ZOOM360.Services.StoreProcedures.IdentityAccessManagment;
using CNS.ZOOM360.Shared.StoreProcedures.UserAccessManagement;
using CNS.ZOOM360.Services.UserAccessManagement;

using CNS.ZOOM360.Shared.StoreProcedures.SourceDescriptionAndConfiguration;
using CNS.ZOOM360.Services.StoreProcedures.SourceConnectorDescAndConfigure;
using CNS.ZOOM360.Shared.StoreProcedures.Prepare;
using CNS.ZOOM360.Services.StoreProcedures.Prepare;
using CNS.ZOOM360.Entities.Model;
using CNS.ZOOM360.Services.StoreProcedures.DestinationService;
using CNS.ZOOM360.Shared.StoreProcedures.SourceDestination;
using CNS.ZOOM360.Shared.StoreProcedures.Load;
using CNS.ZOOM360.Services.StoreProcedures.Load;

using ZOOM360.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ZOOM360.Identity.Utility;
using Microsoft.AspNetCore.Identity;
using User = ZOOM360.Identity.Authentication.User.User;
using CNS.ZOOM360.Shared.StoreProcedures.DynamicGridStructure;
using CNS.ZOOM360.Services.StoreProcedures.DynamicGridStructure;
using CNS.ZOOM360.Shared.StoreProcedures.TimeLineStatus;
using CNS.ZOOM360.Services.StoreProcedures.TimeLineStatus;
using CNS.ZOOM360.Shared.StoreProcedures.AIinsights;
using CNS.ZOOM360.Services.StoreProcedures.AIinsights;
using CNS.ZOOM360.Services.StoreProcedures.enrichDynamicMetadata;
using CNS.ZOOM360.Shared.StoreProcedures.EnrichDynamivMetadata;
using CNS.ZOOM360.Shared.DashBoard;
using ZOOM360.Charts.DashBoardServices.dashBoard;
using CNS.ZOOM360.Shared.StoreProcedures.UserAuthorizarion;
using CNS.ZOOM360.Services.StoreProcedures.UserAuthorizarion;
using CNS.ZOOM360.Shared.StoreProcedures;
using CNS.ZOOM360.Services.StoreProcedures;
using CNS.ZOOM360.Services.StoreProcedures.ChildWorkspace;

using CNS.ZOOM360.Services.StoreProcedures.TreeControlsTemplate;
using CNS.ZOOM360.Shared.StoreProcedures.TreeControlsTemplate;
using CNS.ZOOM360.Shared.StoreProcedures.UserRights;
using CNS.ZOOM360.Services.StoreProcedures.UserRights;
using MySqlConnector;
using Autofac;
using CNS.ZOOM360.Services.StoreProcedures.Predictions;
using CNS.ZOOM360.Shared.StoreProcedures.Predictions;

namespace CNS.ZOOM360.Host
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            LogManager.LoadConfiguration(string.Concat(Directory.GetCurrentDirectory(), "/nlog.config"));
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.ConfigureCors();
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.WithOrigins("http://localhost:4200")
                        .AllowAnyMethod()
                        .AllowAnyHeader());
            });
            var emailConfig = Configuration
           .GetSection("EmailConfiguration")
            .Get<EmailConfiguration>();
            services.AddSingleton(emailConfig);
            services.ConfigureIISIntegration();
            services.ConfigureLoggerService();


      
            services
             .AddDbContext<MySqlDbContext>(options =>
               options.UseMySql(Configuration.GetConnectionString("connectionString"), new MySqlServerVersion(new Version(10, 1, 40))));
            services
                .AddDbContext<ZoomDbContext>(options =>
                  options.UseSqlServer(Configuration.GetConnectionString("Default"), b => b.MigrationsAssembly("ZOOM360.Identity")));
            //services
            //   .AddDbContext<ZOOM360DbContext>(options =>
            //     options.UseSqlServer(Configuration.GetConnectionString("Default"), b => b.MigrationsAssembly("ZOOM360.Identity")));

       

            services.ConfigureSqlContext(Configuration);
            services.ConfigureMySqlContext(Configuration);
            services.ConfigureRepositoryManager();

            var builderr = new ContainerBuilder();
            builderr.RegisterType<ZoomDbContext>().As<ZoomDbContext>();
            builderr.RegisterType<MySqlDbContext>().As<MySqlDbContext>();

         //   builderr.Populate(services);



            services.AddIdentity<User, IdentityRole>(options =>
            {
                options.User.RequireUniqueEmail = false;
            })

    .AddEntityFrameworkStores<ZoomDbContext>()
    .AddEntityFrameworkStores<MySqlDbContext>()
    .AddDefaultTokenProviders();
            
            services.Configure<Mongosettings>(option => {
                option.ConnectionString = Configuration.GetSection("MongoSetting:ConnectionString").Value;
                option.Database = Configuration.GetSection("MongoSetting:Database").Value;
            });

            services.AddScoped(typeof(IRepositoryBase<>), typeof(ZOOM360RepositoryBase<>));
            services.AddScoped(typeof(IMySqlRepositoryBase<>), typeof(MySqlRepositoryBase<>));
            services.AddScoped(typeof(IAuthenticationManager), typeof(AuthenticationManager));
            services.AddScoped(typeof(IWorkspaceSetupService), typeof(WorkspaceSetupService));
            services.AddScoped(typeof(ICalenderSetupService), typeof(CalenderSetupService));
            services.AddScoped(typeof(ICurrencySetupService), typeof(CurrencySetupService));
            services.AddScoped(typeof(IDataGovernanceService), typeof(DataGovernanceService));
            services.AddScoped(typeof(IDisplaySettingsService), typeof(DisplaySettingsService));
            services.AddScoped(typeof(INumeralSetupService), typeof(NumeralSetupService));
            services.AddScoped(typeof(IQuotaSettingService), typeof(QuotaSettingService));
            services.AddScoped(typeof(ITimeZoneSetupService), typeof(TimeZoneSetupService));
            services.AddScoped(typeof(IChangeLogService), typeof(ChangeLogService));
            services.AddScoped(typeof(IAllExtractService), typeof(AllExtractService));
            services.AddScoped(typeof(ICommonDropdownListService), typeof(CommonDropdownListService));
            services.AddScoped(typeof(IDynamicMenuItemService), typeof(DynamicMenuItemService));
            services.AddScoped(typeof(ISqlConnectorService), typeof(SqlConnectorService));
            services.AddScoped(typeof(IConnectionLogService), typeof(ConnectionLogService));
            services.AddScoped(typeof(IGridAndGraphDataService), typeof(GridAndGraphDataService));
            services.AddScoped(typeof(ISourceMappingRulesService), typeof(SourceMappingRulesService));
            services.AddScoped(typeof(IUserLogServices), typeof(UserLogService));


            services.AddScoped(typeof(IUserRightsServices), typeof(UserRightsService));
           services.AddScoped(typeof(IPredictionReachServices), typeof(PredictionReachServices));

            services.AddScoped(typeof(ITreeControlsTemplate), typeof(TreeControlsTemplate));

            services.AddScoped(typeof(IChildWorkspaces), typeof(ChildWorkspaceService));
            //MongoDb
            services.AddScoped(typeof(IEnrichDynamicMetadata), typeof(EnrichDynamicMetadata));

            services.AddScoped(typeof(IIdentityAndAccessManagementService), typeof(IdentityAndAccessManagementService));
            services.AddScoped(typeof(IUserAccessManagementService), typeof(UserAccessManagementService));
            services.AddScoped(typeof(ITimeLineStatusServices), typeof(TimeLineStatusServices));
            services.AddScoped(typeof(IAiInsightsServices), typeof(AiInsightsServices));
            services.AddScoped(typeof(IDynamicGridStructureService), typeof(DynamicGridStructureService));
            services.AddScoped(typeof(ISourceDescriptionAndConfiguration),typeof(sourceDescriptionAndConfigurationService));
            services.AddScoped(typeof(IPrepare), typeof(PrepareServices)); 
            services.AddScoped(typeof(IDestination), typeof(destinationService));
            services.AddScoped(typeof(ILoad), typeof(LoadService));
            services.AddScoped(typeof(IWorkBookService), typeof(WorkbookService));
            services.AddScoped(typeof(IUserAuthorization), typeof(CustomUserAuthorization));
            services.AddAutoMapper(typeof(Startup));
            services.AddScoped<ValidationFilterAttribute>();
            services.ConfigureVersioning();
            services.ConfigureResponseCaching();
            services.ConfigureHttpCacheHeaders();
            //services.ConfigureRateLimitingOptions();
            services.AddHttpContextAccessor();

            services.AddAuthentication();
            services.ConfigureIdentity();
            services.ConfigureJWT(Configuration);

          //  services.AddScoped<IAuthenticationManager, AuthenticationManager>();

            services.ConfigureSwagger();
            services.Configure<ApiBehaviorOptions>(options =>
            {
                options.SuppressModelStateInvalidFilter = true;
            });
            services.AddControllers(config =>
            {
                config.RespectBrowserAcceptHeader = true;
                config.ReturnHttpNotAcceptable = true;
                //config.CacheProfiles.Add("120SecondsDuration", new CacheProfile { Duration = 120 });
            }).AddNewtonsoftJson()
           .AddXmlDataContractSerializerFormatters();



        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env,  ILoggerManager logger)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(x => x
                  .AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader());
            app.ConfigureExceptionHandler(logger);
            
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCors("CorsPolicy");
            
            app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
                ForwardedHeaders = ForwardedHeaders.All
            });

           //pp.UseResponseCaching();
           //pp.UseHttpCacheHeaders();

            //app.UseIpRateLimiting();

            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseSwagger();
            app.UseSwaggerUI(s =>
            {
                s.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1");
                s.SwaggerEndpoint("/swagger/v2/swagger.json", "API v2");
            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
