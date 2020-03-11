import { Musteri } from './Musteri';

export class Yonetici {

    YoneticiId: number;
    KullaniciAdi: string;
    SifreHash: string[];
    SifreSalt:string[];
    Musteriler:Musteri[];
  
}