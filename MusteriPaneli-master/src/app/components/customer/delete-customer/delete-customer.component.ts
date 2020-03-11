import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { MusteriService } from 'src/app/services/musteri.service';
import { Musteri } from 'src/app/models/Musteri';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css'],
  providers:[MusteriService]

})
export class DeleteCustomerComponent implements OnInit {

  constructor(
    private musteriService:MusteriService,
    private activatedRoute:ActivatedRoute
    
    ) {  }
   m:Musteri={MusteriAd:"mts",MusteriDepartman:"arge",MusteriId:14,MusteriSoyad:"bhr"};
  musterim:Musteri[]=[];
  MusterimId:any;
  product: Product;


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
  //this.denemeAbi();
  alert("musteriID ****>"+params['musteriId']);
  this.musteriGetir(params['musteriId']);
  
    })
  }

   musteriGetir(musteriId:number) { 
    alert("gelen musteri ıd" + musteriId);

     this.musteriService.musteriGetir(musteriId).subscribe(data => {
       alert("konya yolundayım");
     this.musterim = data;
     alert("musteri ataması yapıldı")
 
     });
  }
  musteriSilIptal(){
    
  }
  // denemeAbi(){
  //   this.musteriService.getProductById(20).subscribe(data =>{
  //     this.product = data;
  //   })
  //}
  musteriSil(musteriId){//
    alert(musteriId)
    this.musteriService.musteriSil(musteriId);
    
    };

    
  }


