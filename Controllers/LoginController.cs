using giftShop4.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace giftShop4.Controllers
{
    [Route("api2/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        readonly IConfiguration _config;
        public LoginController( IConfiguration config)
        {
            _config = config;
        }
       [AllowAnonymous] 
       [HttpPost]
       public IActionResult Login([FromBody] Users users)
        {
            var user = Authenticate(users);
            if(user != null)
            {
                var token = Generate(user);
                return Ok(token);

            }
            return NotFound("User not Found");

        }

        private string Generate(Users user)
        {
            var  securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credetials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier,user.Name),
                new Claim(ClaimTypes.GivenName,user.Name),
                new Claim(ClaimTypes.Surname,user.LastName),
                new Claim(ClaimTypes.Email,user.Email),
                new Claim(ClaimTypes.Role,user.Role),

            };
            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                _config["Jwt: Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(15),
                signingCredentials: credetials);
            return new JwtSecurityTokenHandler().WriteToken(token);
     
        }

        private Users Authenticate(Users users)
        {
            var currentUser = UserConstants.users.FirstOrDefault( o => o.Email.ToLower() ==
            users.Email.ToLower() && o.Password == users.Password);
            if(currentUser != null)
            {
                return currentUser;
            }
            return null;
        }
    }
}
