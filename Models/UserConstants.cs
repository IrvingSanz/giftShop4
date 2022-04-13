using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace giftShop4.Models
{
    public class UserConstants
    {
        public static List<Users> users = new List<Users>()
        {
            new Users(){Name = "joaquin",LastName = "lopez",Email = "Jlopez@gmail.com",
                Password = "contra123e4*", Role = "Admin"},
            new Users(){Name = "Marco",LastName = "Polo",Email = "Mpolo@gmail.com",
                Password = "contra123e4*", Role = "Client"}
        };
    }
}
