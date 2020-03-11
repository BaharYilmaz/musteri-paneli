using MusteriPaneli.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusteriPaneli.WebApi.Data
{
    public interface IAuthRepository
    {
        //asenkron
        Task<Yonetici> GirisYap(string kullaniciAd, string sifre);
        Task<Yonetici> Register(Yonetici yonetici, string sifre);

        Task<bool> KullaniciKontrol(string kullaniciAd);

    }
}
