import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Musteri } from "../models/Musteri";
import { AlertifyService } from "./alertify.service";
import { Router } from "@angular/router";
import { Product } from '../models/Product';

@Injectable({
  providedIn: "root"
})
export class MusteriService {
  constructor(
    private httpClient: HttpClient,
    private alertifyService: AlertifyService,
    private router: Router //router eklendi
  ) {}

  path = "https://localhost:44330/api/";

  // asenkron bir ortam sunar
  musteriListele(): Observable<Musteri[]> {
    return this.httpClient.get<Musteri[]>(this.path + "musteri");
  }


  musteriSil(musteriId: number) {
    alert("musteriSilservis " + musteriId);
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
          data["MusteriAd"] + "Müşteri başarıyla güncellendi."
        );
        this.router.navigateByUrl("/customers");
      });
  }
  // update(product: Product) {
  //   let id: number = product.ProductID;
  //   this.httpClient.put(this.path + "products/edit/" + id, product).subscribe();
  // }
  // delete(product: Product) {
  //   let id: number = product.ProductID;
  //   this.httpClient.delete(this.path + "products/delete/" + id).subscribe();
  // }





  // path2 = "http://localhost:58083/api/";
  // getProductById(id): Observable<Product> {
  //   return this.httpClient.get<Product>(this.path2 + "products/detail/" + id);
  // }

  musteriGetir(musteriId): Observable<Musteri[]> {
    alert("gelen musteri ıd" + musteriId);
    return this.httpClient.get<Musteri[]>
    (
      this.path + "musteri/musteriGetir/" + musteriId
    );
  }







}
