using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusteriPaneli.WebApi.Models
{
    public class Yonetici
    {
        public Yonetici()
        {
            Musteriler = new List<Musteri>();
        }
        public int YoneticiId { get; set; }
        public string KullaniciAdi { get; set; }
        public byte[] SifreHash { get; set; }
        public byte[] SifreSalt { get; set; }



        public List<Musteri> Musteriler { get; set; }

    }
}
