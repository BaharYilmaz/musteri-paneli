using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusteriPaneli.WebApi.Models;

namespace MusteriPaneli.WebApi.Data
{
    public class AppRepository : IAppRepository
    {
        private DataContext _context;
        public AppRepository(DataContext context)
        {
            _context = context;
        }

        public AppRepository()
        {
        }

        public void Ekle<T>(T entity) where T : class
        {
            _context.Add(entity); 
        }

        public void Guncelle<T>(T entity) where T : class
        {
            _context.Update(entity);

        }

        public List<Musteri> MusteriListele()
        {
            var musteriListesi= _context.Musteri.ToList();
            return musteriListesi;


        }

       

        public bool DegisiklikleriKaydet()
        {
            return _context.SaveChanges() > 0;
        }

       

        public void Sil(int id) 
        {
            var musteri = MusteriGetir(id);
            if (musteri!=null)
            {
                _context.Musteri.Remove(musteri[0]);

            }
        }
        

        public List<Musteri> MusteriGetir(int id)
        {
            List<Musteri> m = new List<Musteri>();
             m = _context.Musteri.Where(s => s.MusteriId == id).ToList();
            
            return m;


        }

       
    }
}
 