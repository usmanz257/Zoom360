using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace CNS.ZOOM360.EntityFrameworkCore
{
   public class ZOOM360DbContextFactory: IDesignTimeDbContextFactory<ZOOM360DbContext>
    {
        public ZOOM360DbContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json").Build();
            var builder = new DbContextOptionsBuilder<ZOOM360DbContext>();
            ZOOM360DbContextConfigurer.Configure(builder, configuration.GetConnectionString("Default"));
            return new ZOOM360DbContext(builder.Options);


        }


    }
}
