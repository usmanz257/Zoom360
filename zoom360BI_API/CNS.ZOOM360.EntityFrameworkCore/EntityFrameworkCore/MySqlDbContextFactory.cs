using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace CNS.ZOOM360.EntityFrameworkCore.EntityFrameworkCore
{
   public class MySqlDbContextFactory : IDesignTimeDbContextFactory<MySqlDbContext>
    {
        public MySqlDbContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json").Build();
            var builder = new DbContextOptionsBuilder<MySqlDbContext>();
            ZOOM360DbContextConfigurer.Configure(builder, configuration.GetConnectionString("connectionString"));
            return new MySqlDbContext(builder.Options);


        }
    }
}
