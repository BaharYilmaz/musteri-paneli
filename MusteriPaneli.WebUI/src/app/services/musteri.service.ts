import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Musteri } from "../models/Musteri";
import { AlertifyService } from "./alertify.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class MusteriService {
  constructor(
    private httpClient: HttpClient,
    private alertifyService: AlertifyService,
    private router: Router //router eklendi
  ) { }

  path = "https://localhost:44330/api/";

  // asenkron bir ortam sunar
  musteriListele(): Observable<Musteri[]> {
    return this.httpClient.get<Musteri[]>(this.path + "musteri");
  }


  musteriSil(musteriId: number) {
    return this.httpClient
      .post(this.path + "musteri/sil/?musteriId=" + musteriId, {})
      .subscribe(data => {
        this.alertifyService.success("Müşteri başarıyla silindi.");
        this.router.navigateByUrl("/customers");
      });
  }

  musteriEkle(musteri) {
    this.httpClient
      .post(this.path + "musteri/ekle", musteri)
      .subscribe(data => {
        this.alertifyService.success("Yeni müşteri başarıyla eklendi.");
        this.router.navigateByUrl("/customers"); // !!!!!
      });
  }
  musteriDuzenle(musteri: Musteri) {

    this.httpClient
      .post(this.path + "musteri/guncelle", musteri)
      .subscribe(data => {
        this.alertifyService.success(
          "Müşteri başarıyla güncellendi."
        );
        this.router.navigateByUrl("/customers");
      });
  }


  musteriGetir(musteriId): Observable<Musteri[]> {
    return this.httpClient.get<Musteri[]>
      (
        this.path + "musteri/musteriGetir/" + musteriId
      );
  }

  musteriListesineGit() {
    this.router.navigateByUrl("/customers");
  }

}
