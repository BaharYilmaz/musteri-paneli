using MusteriPaneli.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusteriPaneli.WebApi.Data
{
    public interface IAppRepository
    {
       
        void Ekle<T>(T entity) where T:class;
        void Sil(int id);
        void Guncelle<T>(T entity) where T : class; 
        bool DegisiklikleriKaydet();

        //todo
       // Musteri MusteriGetir(int id);
        List<Musteri> MusteriListele();
        List<Musteri> MusteriGetir(int id);

    }
}

