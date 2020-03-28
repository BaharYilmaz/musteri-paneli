
CREATE DATABASE MusteriPaneli
GO
USE MusteriPaneli
GO
CREATE TABLE Yonetici
(
YoneticiId INT IDENTITY(1,1) PRIMARY KEY,
KullaniciAdi NVARCHAR(10),
SifreHash VARBINARY(MAX) NULL,
SifreSalt VARBINARY(MAX) NULL

)

GO
CREATE TABLE Musteri
(
MusteriId INT IDENTITY(1,1) PRIMARY KEY,
MusteriAd NVARCHAR(50),
MusteriSoyad NVARCHAR(50),
MusteriDepartman NVARCHAR(50),
YoneticiId INT FOREIGN KEY REFERENCES Yonetici(yoneticiId),

)
GO

INSERT INTO Yonetici(KullaniciAdi,SifreHash,SifreSalt)
VALUES('admin',0xECA0A26EF9E0F92F068B409DBF42E2200D7208EC53BD70FD4B51C12E578300C14D1065EE065F92027225476C353011786F594B41EBD28F947769E4CEEDE2A1D9,
0x5A4E050ED7FFF9C341A2D90D8B9F042BB571059BE79CCF67CAACF01F2A33D9BB3A1A77C6C441D15591E9CDDA9AC4937B4F599E7FC448F60BAEE515BF39C8979AA6E8BBA979F3080C21A02B8F55F8B2C006036D706AA1ACD98279AABC2FDAB0A64BACBA1B39CFAE9A9FAE7C13B49E55DD65FAF8BF8C219653A97B085DE94D5FF4)
GO

CREATE PROC SP_MusteriEkle
(
@musteriAd NVARCHAR(50),
@musteriSoyad NVARCHAR(50),
@musteriDepartman NVARCHAR(50),
@yoneticiId INT
)
AS 
BEGIN
INSERT INTO Musteri(MusteriAd,MusteriSoyad,MusteriDepartman,YoneticiId)
 VALUES (@musteriAd,@musteriSoyad,@musteriDepartman,@yoneticiId)
END
GO

EXEC SP_MusteriEkle 'musteriAd1','musteriSoyad1','A',4
EXEC SP_MusteriEkle 'musteriAd2','musteriSoyad2','A',4
EXEC SP_MusteriEkle 'musteriAd3','musteriSoyad3','B',4
EXEC SP_MusteriEkle 'musteriAd4','musteriSoyad4','C',4

GO
CREATE PROC SP_MusteriSil
(
@musteriId INT
)
AS
BEGIN
DELETE FROM Musteri WHERE MusteriId=@musteriId
END

/* EXEC SP_MusteriSil 5*/

GO
CREATE PROC SP_MusteriDuzenle
(
@musteriId INT,
@musteriAd NVARCHAR(50),
@musteriSoyad NVARCHAR(50),
@musteriDepartman NVARCHAR(50)
)
AS
BEGIN
UPDATE Musteri SET 


MusteriAd=@musteriAd , 
MusteriSoyad=@musteriSoyad,
MusteriDepartman=@musteriDepartman
WHERE MusteriId=@musteriId

END
GO
/*exec SP_MusteriDuzenle @musteriId=4,@musteriAd='ali',@musteriSoyad='veli',@musteriDepartman='c'*/

CREATE VIEW View_MusteriListele 
AS
SELECT m.MusteriAd,m.MusteriSoyad,m.MusteriDepartman FROM Musteri as m INNER JOIN Yonetici as y ON m.YoneticiId=y.YoneticiId
GO
/*exec*/
SELECT * FROM View_MusteriListele

GO

