using CNS.ZOOM360.Entities;
using CNS.ZOOM360.Entities.Configuration;
using CNS.ZOOM360.Entities.StoreProcedures.Workspace;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using ZOOM360.Charts.Model;


namespace CNS.ZOOM360.EntityFrameworkCore
{
    public class MySqlDbContext : DbContext
    {
        public virtual DbSet<Workbook> Workbooks { get; set; }
        public virtual DbSet<Page> Pages { get; set; }
        public virtual DbSet<Widget> Widget { get; set; }
        public virtual DbSet<Measure> Measure { get; set; }
        public virtual DbSet<Dimension> Dimension { get; set; }
        public virtual DbSet<Layout> Layouts { get; set; }
        public virtual DbSet<PageProperties> PageProperties { get; set; }
        public virtual DbSet<Query> Queries { get; set; }
        public virtual DbSet<Employee> emplyee { get; set; }

        public virtual DbSet<WorkspaceSetup> workspaceSpModal { get; set; }
        public MySqlDbContext(DbContextOptions<MySqlDbContext> options)
           : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new RoleConfiguration());
            modelBuilder.Entity<WorkspaceSetup>(
            ex => { ex.HasNoKey(); }
            );
            modelBuilder.Entity<WorkspaceSetupList>(
               ex => { ex.HasNoKey(); }
               );
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
