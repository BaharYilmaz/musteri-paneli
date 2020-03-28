using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusteriPaneli.WebApi.Dtos
{
    public class UserForLoginDto
    {
        public string KullaniciAdi { get; set; }
        public string Sifre { get; set; }
    }
}
