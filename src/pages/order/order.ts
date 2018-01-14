import { Component } from '@angular/core';
import { ModalController, NavParams } from "ionic-angular";
import { Photo } from "../productmodels/photo/photo";
import { Frame } from "../productmodels/frame/frame";

const PHOTOS = []
const FRAMES=[]
@Component({
  selector: 'order-page',
  templateUrl: 'order.html'
})
export class OrderComponent {
  photos=PHOTOS;
  frames=FRAMES;
  allPrice:number=0;

  photoPrice:number=0;
  framPrice:number=0;

  photoOrdersCount:number=0;
  framOrderCount:number=0;

  photoOrders:string="";
  frameOrders:string="";

  panelIndex;
  constructor(public modalCtrl: ModalController,
      public np:NavParams
  ) {
    
    
  }
  ngOnInit(){
    console.log(this.np.data);
    
    this.panelIndex=this.np.get("index") || 0;
  }
  getorder(data){
   switch(data.type || data.obj.type){
      case "photo":
      this.photos.push(data);
      this.ordersPhotoGenerate();
      break;
      case "fram": 
      this.frames.push(data);
      this.ordersFrameGenerate();
      break;
   }
  }
  delorder(order,i){
    switch(order.type || order.obj.type){
      case "photo":  
      this.photos.splice(i, 1);
      if(this.photos.length>0){
        this.ordersPhotoGenerate();
      }
      else{
         this.photoPrice=0;
     this.photoOrdersCount=0;
     this.photoOrders="";
     this.allPrice=this.framPrice+this.photoPrice;
      }
      break;
      case "fram": 
      this.frames.splice(i, 1);
      if(this.frames.length>0){
        this.ordersFrameGenerate();
      }
       else{
        this.frameOrders="";
        this.framOrderCount=0;
        this.framPrice=0;
        this.allPrice=this.framPrice+this.photoPrice;
       }
      break;
   }
    
  }
  ordersPhotoGenerate(){
            this.photoPrice=0;
     this.photoOrdersCount=0;
     this.allPrice=0
      for(let i=0; i<this.photos.length; i++){
        this.photoPrice+=this.photos[i].price;
        this.photoOrdersCount+=this.photos[i].count*this.photos[i].photos.length;
      }
      this.photoOrders=this.photos[0].name+": "+this.photoOrdersCount.toString();
      this.allPrice+=this.photoPrice+this.framPrice;  
    }
    ordersFrameGenerate(){
      this.allPrice=0
      this.framPrice=0;
      this.framOrderCount=0;
      for(let i=0; i<this.frames.length; i++){
        this.framPrice+=this.frames[i].price;
        for(let j=0; j<this.frames[i].photos.length; j++){
          this.framOrderCount+=this.frames[i].photos[j].count;
        }
      }
      this.allPrice+=this.framPrice+this.photoPrice;
      this.frameOrders="Frames: "+this.framOrderCount.toString();
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
  openEditModelFram(i){
      let myModel=this.modalCtrl.create(Frame, {obj:this.frames[i].obj, photos: this.frames[i].photos});
      myModel.present();
      myModel.onWillDismiss((data,role)=>{
        if(data){
          this.frames[i]=data;
          this.ordersFrameGenerate();
        }
      })
  }
}