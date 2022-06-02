using Microsoft.EntityFrameworkCore;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Text;

namespace CNS.ZOOM360.EntityFrameworkCore
{
    public class ZOOM360DbContextConfigurer
    {
        
        public static void Configure(DbContextOptionsBuilder<ZOOM360DbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<ZOOM360DbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
        public static void Configure(DbContextOptionsBuilder<MySqlDbContext> builder, string connectionString)
        {
            builder.UseMySQL(connectionString);
        }
        public static void Configure(DbContextOptionsBuilder<MySqlDbContext> builder, DbConnection connection)
        {
            builder.UseMySQL(connection);
        }


    }
}
