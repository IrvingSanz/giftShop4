using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace giftShop4.Models
{
    public class Users
    {
        [Key]
        public int IdUser { get; set; }
        [Required]
        public string Name{ get; set; }

        [Required]
        public string LastName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public DateTime BirthDay { get; set; }
        [NotMapped]
        public string BirthDayString { get; set; }
    }
}
