import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { MusteriService } from 'src/app/services/musteri.service';
import { Musteri } from 'src/app/models/Musteri';



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


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
  this.musteriGetir(params['musteriId']);
  
    })
  }

   musteriGetir(musteriId:number) { 
    //alert("gelen musteri ıd" + musteriId);

     this.musteriService.musteriGetir(musteriId).subscribe(data => {
     this.musterim = data;
 
     });
  }
  musteriSilIptal(){
    this.musteriService.musteriListesineGit();
    
  }
 
  musteriSil(musteriId){
    this.musteriService.musteriSil(musteriId);
    
    };

  }


