using AutoMapper;
using giftShop4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace giftShop4.AutoMapper
{
    public class Automapper : Profile
    {
        public Automapper()
        {
            CreateMap<Users, UserDto>().ReverseMap();
        }
    }
}
