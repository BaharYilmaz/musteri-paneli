using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MusteriPaneli.WebApi.Data;
using MusteriPaneli.WebApi.Models;

namespace MusteriPaneli.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MusteriController : ControllerBase
    {
        private IAppRepository _appRepository;
        public MusteriController(IAppRepository appRepository)
        {
            _appRepository = appRepository;
        }

        public ActionResult MusteriListele()
        {
            var MusteriListesi = _appRepository.MusteriListele();
            return Ok(MusteriListesi);

        }
        [HttpPost]
        [Route("ekle")]
        public ActionResult MusteriEkle([FromBody]Musteri musteri)
        {
            _appRepository.Ekle(musteri);
            _appRepository.DegisiklikleriKaydet();

            return Ok(musteri);//eklenen müşteriyi döndür
        }
        [HttpPost]
        [Route("guncelle")]
        public ActionResult MusteriGuncelle([FromBody] Musteri musteri) //from form
        {
            //_appRepository.Guncelle(musteri, musteriId);
            _appRepository.DegisiklikleriKaydet();

            return Ok();
        }
        [HttpPost]
        [Route("sil")]
        public ActionResult MusteriSil(int musteriId)//değişebilir
        {
            if (musteriId != null)
            {
                _appRepository.Sil(musteriId);
                _appRepository.DegisiklikleriKaydet();
            }
           

            return Ok();//eklenen müşteriyi döndür
        }

        //[HttpGet("musteridetail/{musteriId}")]
        //public ActionResult<Musteri> MusteriGetir(int musteriId)//değişebilir
        //{
        //    // Musteri musteri =  _appRepository.MusteriGetir(musteriId);
        //    Musteri musteri = new Musteri
        //    {
        //        MusteriAd = "mts",
        //        MusteriDepartman = "mts",
        //        MusteriId = 1,
        //        MusteriSoyad = "mts"
        //    };

        //    return musteri;



        //}
        [HttpGet("musteriGetir/{musteriId}")]
        public ActionResult MusteriGetir(int musteriId)//değişebilir
        {
            var m = _appRepository.MusteriGetir(musteriId);
            return Ok(m);
            
        }
       


        //[HttpGet("musteridetail2/{musteriId}")]
        //public ActionResult<Musteri> musteriGetirme(int musteriId)//değişebilir
        //{
        //    Musteri musteri = _appRepository.MusteriGetir(musteriId);

        //    return musteri;



        //}
       

    }
}