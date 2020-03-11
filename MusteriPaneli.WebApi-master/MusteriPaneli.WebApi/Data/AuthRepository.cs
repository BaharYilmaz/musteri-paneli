using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MusteriPaneli.WebApi.Models;

namespace MusteriPaneli.WebApi.Data
{
    public class AuthRepository : IAuthRepository
    {
       
        private  DataContext _context;
        public AuthRepository(DataContext Context)
        {
            _context = Context;
        }

        public async Task<Yonetici> Register(Yonetici yonetici, string sifre)
        {
            byte[] sifreHash, sifreSalt;
            CreatePasswordHash(sifre, out sifreHash, out sifreSalt);

            yonetici.SifreHash = sifreHash;
            yonetici.SifreSalt = sifreSalt;

            await _context.Yonetici.AddAsync(yonetici);
            await _context.SaveChangesAsync();

            return yonetici;

             
        }

        private void CreatePasswordHash(string sifre, out byte[] sifreHash, out byte[] sifreSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                sifreSalt = hmac.Key;
                sifreHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(sifre));

            }
        }

        public async Task<bool> KullaniciKontrol(string kullaniciAd)
        {
            if (await _context.Yonetici.AnyAsync(x=>x.KullaniciAdi==kullaniciAd))
            {
                return true;
            }
            return false;

        }

        public async Task<Yonetici> GirisYap(string kullaniciAd, string sifre)
        {
            var user = await _context.Yonetici.FirstOrDefaultAsync(x => x.KullaniciAdi == kullaniciAd);
            if (user==null)
            {
                return null;
            }
            if (!VerifyPasswordHash(sifre,user.SifreHash,user.SifreSalt))
            {
                return null;
            }
            return user;//veritabanındaki kullanıcı döndürülür

        }

        private bool VerifyPasswordHash(string _sifre, byte[] _sifreHash, byte[] _sifreSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(_sifreSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(_sifre));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if(computedHash[i]!=_sifreHash[i])
                    {
                        return false;
                    }
                }
                return true;
            }
        }
    }
}
