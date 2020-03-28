import { Component, OnInit } from '@angular/core';
import { MusteriService } from 'src/app/services/musteri.service';
import {FormGroup,FormControl,Validators,FormBuilder} from "@angular/forms";
import { Musteri } from 'src/app/models/Musteri';



@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(
  

    private musteriService:MusteriService,
    private formBuilder:FormBuilder
    
    ) { }

  musteri:Musteri;
  FormMusteriEkle:FormGroup;

  //müşteri ekleme formu oluşturma
  musteriFormuOlustur(){
   this.FormMusteriEkle=this.formBuilder.group({
     musteriAd:["",Validators.required],
     musteriSoyad:["",Validators.required],
     musteriDepartman:["",Validators.required]

   })
  }


 
  ngOnInit(): void {
     this.musteriFormuOlustur();
  }

  //form submit olduğunda
  musteriEkle(){
    if(this.FormMusteriEkle.valid){
      this.musteri=Object.assign({},this.FormMusteriEkle.value)
      
      //this.musteri.Yonetici.YoneticiId=4;
      this.musteriService.musteriEkle(this.musteri);
    }

  }


}
