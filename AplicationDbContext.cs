using giftShop4.Models;
using Microsoft.EntityFrameworkCore;
using System;

using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace giftShop4
{
    
    public class AplicationDbContext : DbContext
    {
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options): base(options)
        {

        }
        public DbSet<Users> Users { get; set; }
    }
}
