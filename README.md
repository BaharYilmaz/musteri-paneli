# MÜSTERİ PANELİ UYGULAMASI

Uygulama Visual Studio 2017 kullanılarak Asp.Net Core 2.2 ve Angular 9.0.5 ile geliştirilmiştir. Veritabanı olarak MSSQL kullanılmıştır.
Uygulama içerisinde yönetici giriş yapıp müşteri listeleme/ekleme/silme/düzenleme işlemlerini gerçekleştirebilmektedir.
Yönetici giriş işleminde JSON Web Token(Jwt) kullanılmıştır.

## Uygulamanın çalışır halinin videosu => https://drive.google.com/file/d/1Q6eomcMxHqWrG1AsY5SlzchaVDyQIXlO/view

## Uygulamanın kurulumu ve çalıştırılması =>
Öncelikle MSSQL Management Studio ile musteri_paneli.sql adlı script  çalıştırılarak veritabanı oluşturulmalıdır.

## Visual Studio’da kullanılan paketler
*	EntityfFrameworkCore 2.2.2
* Microsoft.EntityFrameworkCore.SqlServer 2.2.2
* Microsoft.AspNetCore.Cors 2.2.0

## Visual Studio ile MusteriPaneli.WebApi servisini çalıştırmak için =>

*	Uygulama içerinde yer alan appsettings.json dosyasından veritabanı bağlantısı için “ConnectionStrings” değiştirilmelidir. 


 ![image](https://user-images.githubusercontent.com/48556212/77822137-15a0ff00-7101-11ea-8d46-ed0d699fec25.png)





	Ve uygulama çalıştırılmalıdır.
 
## Servis çalışıyor =>
![image](https://user-images.githubusercontent.com/48556212/77822162-4b45e800-7101-11ea-9973-c58964064219.png)

 
## Visual Studio Code ile uygulamanın önyüzünü (MusteriPaneli.WebUI) çalıştırmak için =>
*	MusteriPaneli.WebUI uygulaması içerisinde src/app/services klasöründe yer alan musteri.service.ts ve auth.service.ts içerisindeki  MusteriPaneli.WebApi servisinin yolu olan “path” değişkeni değiştirilmedir.

![image](https://user-images.githubusercontent.com/48556212/77822171-59940400-7101-11ea-9835-bef00642e0e1.png)

*	Komut satırından npm install komutu ile Angular paketleri uygulamaya yüklenmelidir.

![image](https://user-images.githubusercontent.com/48556212/77822179-69134d00-7101-11ea-83e0-6af587aa72de.png)
 

*	Tüm kurulumlar tamamlandıktan sonra komut satırından ng serve --o ile ugulama çalıştırılır.

![image](https://user-images.githubusercontent.com/48556212/77822182-7597a580-7101-11ea-8a1b-9887251457a6.png)
 

*	Artık web uygulaması çalışır durumdadır. Gelen giriş ekranından 

Kullanıcı Adı : “admin”
Şifre: “admin”

yazarak giriş yapan kişi bir takım müşteri işlemlerini gerçekleştirebilip dilerse uygulamadan çıkış yapabilmektedir.
