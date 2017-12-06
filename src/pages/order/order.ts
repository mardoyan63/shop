import { Component } from '@angular/core';
import { ModalController } from "ionic-angular";
import { Photo } from "../productmodels/photo/photo";

const PHOTOS = []

@Component({
  selector: 'order-page',
  templateUrl: 'order.html'
})
export class OrderComponent {
  photos=PHOTOS;
  photoPrice:number=0;
  photoOrdersCount:number=0;
  photoOrders:string="(empty)";
  constructor(public modalCtrl: ModalController) {}
  getorder(data){
    this.photos.push(data);
    this.ordersPhotoGenerate();
  }
  show(){
    console.log(this.photos);
    
  }
  delorder(i){
    this.photos.splice(i, 1);
    if(this.photos.length>0){
        this.ordersPhotoGenerate();
    }
      else{
        this.photoPrice=0;
     this.photoOrdersCount=0;
     this.photoOrders="(empty)";
      }
  }
  ordersPhotoGenerate(){
            this.photoPrice=0;
     this.photoOrdersCount=0;
      for(let i=0; i<this.photos.length; i++){
        this.photoPrice=this.photoPrice+this.photos[i].price;
        this.photoOrdersCount=this.photoOrdersCount+this.photos[i].count*this.photos[i].photos.length;
      }
      this.photoOrders=this.photos[0].name+": "+this.photoOrdersCount.toString();
  }
    openEditModelPhoto(i){
      let myModal = this.modalCtrl.create(Photo, {array:this.photos[i].photos, size:this.photos[i].size, count:this.photos[i].count});
    myModal.present();
     myModal.onWillDismiss((data,rol)=>{
        if(data){
           this.photos[i].size=data.size;
           this.photos[i].count=data.count;
           this.photos[i].photos=data.photos;
           this.photos[i].price=data.price;
           this.ordersPhotoGenerate();
        }
    })
    }
}