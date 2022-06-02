using System.Linq;
using System.Threading.Tasks;
using AutoMapper;

using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Entities.Model;
using CNS.ZOOM360.Host.ActionFilters;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ZOOM360.Identity.Authentication.User;
using ZOOM360.Identity.Utility;
using User = ZOOM360.Identity.Authentication.User.User;
using CNS.ZOOM360.Shared.Authentication.Dtos;
using Microsoft.AspNetCore.Cors;
using CNS.ZOOM360.Shared.StoreProcedures.UserAuthorizarion;
using System.Collections.Generic;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route("api/authentication")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly ILoggerManager _logger;
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;
        private readonly IAuthenticationManager _authManager;
        private readonly IUserAuthorization _userAuthorization;
        public AuthenticationController(
            ILoggerManager logger, IMapper mapper,
            UserManager<User> userManager, IAuthenticationManager authManager,
            IUserAuthorization userAuthorization)
        {
            _logger = logger;
            _mapper = mapper;
            _userManager = userManager;
            _authManager = authManager;
            _userAuthorization = userAuthorization;
        }

        //[HttpPost]
        //[ServiceFilter(typeof(ValidationFilterAttribute))]
        //public async Task<IActionResult> RegisterUser([FromBody] UserForRegistrationDto userForRegistration)
        //{
        //    var user = _mapper.Map<User>(userForRegistration);

        //    var result = await _userManager.CreateAsync(user, userForRegistration.Password);
        //    if (!result.Succeeded)
        //    {
        //        foreach (var error in result.Errors)
        //        {
        //            ModelState.TryAddModelError(error.Code, error.Description);
        //        }

        //        return BadRequest(ModelState);
        //    }

        //    if (!userForRegistration.Roles.Any())
        //    {
        //        _logger.LogInfo("Roles doesn't exist in the registration DTO object, adding the default one.");
        //        await _userManager.AddToRoleAsync(user, "Manager");
        //    }
        //    else
        //    {
        //        await _userManager.AddToRolesAsync(user, userForRegistration.Roles);
        //    }

        //    return StatusCode(201);
        //}

        [HttpPost("login")]

        //  [ServiceFilter(typeof(ValidationFilterAttribute))]
        public async Task<IActionResult> Authenticate([FromBody] userAuthentication user)
        {

            List<UserLoginInfomartionModel> userDetail = this._userAuthorization.CheckAuthorization(user);
            if (userDetail.Count != 0)
            {

                if (!await _authManager.ValidateUser(user))
                {
                    _logger.LogWarn($"{nameof(Authenticate)}: Authentication failed. Wrong user name or password.");
                    return Unauthorized();
                }

                return Ok(new
                {
                    Token = await _authManager.CreateToken(),
                    userInfo = await _userManager.FindByEmailAsync(user.Email),
                    CustomUserInfo = userDetail[0]
                });
            }

            else
            {
                _logger.LogWarn($"{nameof(Authenticate)}: You are not authorize user");
                return Unauthorized("You are not authorize user");
            }
                //var applicationUser = "";
        }

        [HttpPost("RegisterUser")]
       //  [ServiceFilter(typeof(ValidationFilterAttribute))]
        public async Task<IActionResult> RegisterUser([FromBody] userRegistration userForRegistration)
        {
            var user = _mapper.Map<User>(userForRegistration);
            var result = await _userManager.CreateAsync(user, userForRegistration.Password);
            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.TryAddModelError(error.Code, error.Description);
                }

                return BadRequest(ModelState);
            }

            if (!userForRegistration.Roles.Any())
            {
                // _logger.LogInfo("Roles doesn't exist in the registration DTO object, adding the default one.");
                await _userManager.AddToRoleAsync(user, "Manager");
            }
            else
            {
                await _userManager.AddToRolesAsync(user, userForRegistration.Roles);
            }

            return StatusCode(201);
            
        }
        [HttpPost("UserLoggedin")]

        public async Task<IActionResult> UserLoggedin([FromBody] userAuthentication user)
        {
            string statusMessage;
            statusMessage = this._userAuthorization.UserLoggedIn(user);
            
            return Ok(statusMessage);
            // var applicationUser="";
        }
    }
}