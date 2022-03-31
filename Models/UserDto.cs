﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace giftShop4.Models
{
    public class UserDto
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string LastName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public DateTime BirthDay { get; set; }
    }
}
