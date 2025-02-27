using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace API.Controllers
{
    public class AccountController: BaseApiController
    {
        private readonly SignInManager<AppUser> _signInManager;
        private readonly UserManager<AppUser> _userManager;

        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager){
            _signInManager = signInManager;
            _userManager = userManager;
         }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto){
            
        }
    }
}