using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using giftShop4.Models;
using System.Text;
using System.Security.Claims;





// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace giftShop4.Controllers
{   
    [Route("api/identity")]
    [ApiController]
    public class IdentityController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger<IdentityController> _logger;

        public IdentityController(IConfiguration configuration, ILogger<IdentityController> logger)
        {
            _configuration = configuration;
            _logger = logger;
        }

        // POST api/<IdentityController>
        [HttpPost]
        [Route("login")]
        public IActionResult Login(LoggingModel login)
        {
            try
            {
                //Verifica el usuario y contraseña
                if (login.email != "i@gmial.com" || login.password != "123456")
                {
                    return BadRequest("Usuario/Contraseña incorrectos");
                }

                //Genera el token
                var token = GenerateToken(login);

                return Ok(new
                {
                    response = new JwtSecurityTokenHandler().WriteToken(token)
                });
            }
            catch (Exception e)
            {
                _logger.LogError("Login: " + e.Message, e);
                return StatusCode((int)System.Net.HttpStatusCode.InternalServerError, e.Message);
            }
        }
        private JwtSecurityToken GenerateToken(LoggingModel login)
        {
            string ValidIssuer = _configuration["ApiAuth:Issuer"];
            string ValidAudience = _configuration["ApiAuth:Audience"];
            SymmetricSecurityKey IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["ApiAuth:SecretKey"]));

            //La fecha de expiracion sera el mismo dia a las 12 de la noche
            DateTime dtFechaExpiraToken;
            DateTime now = DateTime.Now;
            dtFechaExpiraToken = new DateTime(now.Year, now.Month, now.Day, 23, 59, 59, 999);

            //Agregamos los claim nuestros
            //var claims = new[]
            //{
            //    new Claim(Constantes.JWT_CLAIM_USUARIO, login.email)
            //};

            return new JwtSecurityToken
            (
                issuer: ValidIssuer,
                audience: ValidAudience,
                expires: dtFechaExpiraToken,
                notBefore: now,
                signingCredentials: new SigningCredentials(IssuerSigningKey, SecurityAlgorithms.HmacSha256)
            );
        }
    }

    
}
