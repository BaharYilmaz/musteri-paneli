using Microsoft.EntityFrameworkCore;
using MusteriPaneli.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusteriPaneli.WebApi.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options):base(options)
        {

        }

        //Model klasöründeki tabloları veritabanı ile eşleştirme
        public DbSet<Yonetici> Yonetici { get; set; }
        public DbSet<Musteri> Musteri { get; set; }



    }
}
