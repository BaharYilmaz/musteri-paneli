# musteri-paneli
MÜSTERİ PANELİ UYGULAMASI

Uygulama Visual Studio 2017 kullanılarak Asp.Net Core 2.2 ve Angular 9.0.5 ile geliştirilmiştir. Veritabanı olarak MSSQL kullanılmıştır.
Uygulama içerisinde yönetici giriş yapıp müşteri listeleme/ekleme/silme/düzenleme işlemlerini gerçekleştirebilmektedir.
Yönetici giriş işleminde JSON Web Token(Jwt) kullanılmıştır.

Uygulamanın çalışır halinin videosu => https://drive.google.com/file/d/1Q6eomcMxHqWrG1AsY5SlzchaVDyQIXlO/view

Uygulamanın kurulumu ve çalıştırılması =>
Öncelikle MSSQL Management Studio ile musteri_paneli.sql adlı script  çalıştırılarak veritabanı oluşturulmalıdır.

Visual Studio’da kullanılan paketler
•	EntityfFrameworkCore 2.2.2
•	Microsoft.EntityFrameworkCore.SqlServer 2.2.2
•	Microsoft.AspNetCore.Cors 2.2.0

Visual Studio ile MusteriPaneli.WebApi servisini çalıştırmak için =>

•	Uygulama içerinde yer alan appsettings.json dosyasından veritabanı bağlantısı için “ConnectionStrings” değiştirilmelidir. 

 





•	Ve uygulama çalıştırılmalıdır.
Servis çalışıyor =>

 
Visual Studio Code ile uygulamanın önyüzünü (MusteriPaneli.WebUI) çalıştırmak için =>
•	MusteriPaneli.WebUI uygulaması içerisinde src/app/services klasöründe yer alan musteri.service.ts ve auth.service.ts içerisindeki  MusteriPaneli.WebApi servisinin yolu olan “path” değişkeni değiştirilmedir.
            

•	Komut satırından npm install komutu ile Angular paketleri uygulamaya yüklenmelidir.

 

•	Tüm kurulumlar tamamlandıktan sonra komut satırından ng serve --o ile ugulama çalıştırılır.

 

•	Artık web uygulaması çalışır durumdadır. Gelen giriş ekranından 

Kullanıcı Adı : “admin”
Şifre: “admin”

yazarak giriş yapan kişi bir takım müşteri işlemlerini gerçekleştirebilip dilerse uygulamadan çıkış yapabilmektedir.
