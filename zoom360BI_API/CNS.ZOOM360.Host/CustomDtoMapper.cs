using AutoMapper;
using CNS.ZOOM360.Shared.Authentication.Dtos;
using CNS.ZOOM360.Entities.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using User = ZOOM360.Identity.Authentication.User.User;
using ZOOM360.Identity.Authentication.User;

namespace CNS.ZOOM360.Host
{
    public class CustomDtoMapper: Profile
    {
        public CustomDtoMapper()
        {
           // CreateMap<UserForRegistrationDto, User>();

            CreateMap<userRegistration, User>();

            /* ADD YOUR OWN CUSTOM AUTOMAPPER MAPPINGS HERE */
        }
    }
}
