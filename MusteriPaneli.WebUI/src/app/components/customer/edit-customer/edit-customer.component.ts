import { Component, OnInit } from '@angular/core';
import { MusteriService } from 'src/app/services/musteri.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Musteri } from 'src/app/models/Musteri';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  constructor(
    private musteriService:MusteriService,
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.musteriGetir(params['musteriId']);
      
        })
    this.musteriFormOlustur();

  }

  musterim:Musteri[]=[];
  musteri:Musteri;
  FormMusteriDuzenle:FormGroup;
  
  musteriFormOlustur(){
   this.FormMusteriDuzenle=this.formBuilder.group({
    musteriAd:["",Validators.required],
    musteriId:["",Validators.required],
    musteriSoyad:["",Validators.required],
    musteriDepartman:["",Validators.required]
   })
  }

  //form submit olduğunda
  musteriDuzenle(){
    if(this.FormMusteriDuzenle.valid){
      this.musteri=Object.assign({},this.FormMusteriDuzenle.value)
      //this.musteri.Yonetici.YoneticiId=4;
      this.musteriService.musteriDuzenle(this.musteri);
    }
  }
  musteriGetir(musteriId:number) { 

     this.musteriService.musteriGetir(musteriId).subscribe(data => {
     this.musterim = data;
     this.FormMusteriDuzenle.setValue(this.musterim[0]);
     });
    }
}
