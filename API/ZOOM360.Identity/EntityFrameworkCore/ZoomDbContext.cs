using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using ZOOM360.Identity.Authentication.User;
using ZOOM360.Identity.Configuration;

namespace ZOOM360.Identity.EntityFrameworkCore
{

    public class ZoomDbContext : IdentityDbContext<User>
    {
        public ZoomDbContext(DbContextOptions<ZoomDbContext> options) : base(options)
        {

        }

     

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ApplyConfiguration(new RoleConfiguration());
        }
    }
}
