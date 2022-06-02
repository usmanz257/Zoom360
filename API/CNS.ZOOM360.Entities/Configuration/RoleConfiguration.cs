﻿using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Entities.Configuration
{
    public class RoleConfiguration : IEntityTypeConfiguration<IdentityRole>
    {
        public void Configure(EntityTypeBuilder<IdentityRole> builder)
        {
            builder.HasData(
                new IdentityRole
                {
                    Name = "ADMIN",
                    NormalizedName = "ADMIN"
                },
              new IdentityRole
              {
                  Name = "Manager",
                  NormalizedName = "MANAGER"
              },
              new IdentityRole
              {
                  Name = "Administrator",
                  NormalizedName = "ADMINISTRATOR"
              }
            );
        }
    }
}
