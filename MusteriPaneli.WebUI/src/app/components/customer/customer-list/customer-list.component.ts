import { Component, OnInit } from '@angular/core';
//müşteri servisi import edildi
import { Musteri } from 'src/app/models/Musteri';
import { MusteriService } from 'src/app/services/musteri.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],

  //uygulama açıldığında MusteriService örneği oluşur
  providers:[MusteriService]
})
export class CustomerListComponent implements OnInit {

  constructor(private musteriService:MusteriService) {  }
  musteriListesi:Musteri[]=[]


  ngOnInit(): void { 
    //müşteri servisine bağlanır verileri alır
    this.musteriService.musteriListele().subscribe(data=>{
    this.musteriListesi=data;

    
    })
  }

  
}
