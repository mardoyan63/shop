import { Component } from "@angular/core";
import { ViewController, NavParams } from "ionic-angular";
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';


@Component({
    selector: 'photo-page',
    templateUrl:'photo.html',
    providers:[ ImagePicker]
})
export class Photo{
    photos:Array<string>;
    index:string='';
    size:string;
    count:number;
    price:number;
    options:ImagePickerOptions={maximumImagesCount: 15, width: 100, height:100, quality: 50};
    constructor(
    public viewCtrl: ViewController,
        private imagePicker: ImagePicker,
        public np:NavParams
){
    }
ngOnInit(){
     this.size=this.np.get("size")|| '30x30';
        this.count=this.np.get("count")|| 1;
        this.photos=this.np.get("array")|| [];
        this.count=this.np.get("count") || 1;
        this.size=this.np.get("size") || "30x30";
}
    dismiss() {
    this.viewCtrl.dismiss();
  }
  getphoto(){
      this.imagePicker.getPictures(this.options).then((results) => {
  for (var i = 0; i < results.length; i++) {
      console.log('Image URI: ' + results[i]);
      this.photos=results;
  }
}, (err) => {console.log("open gallary");
 });
  }
    delphoto(i){
        this.photos.splice(i,1);
    }
    
    buy(){
        if(this.photos.length){
            switch(this.size){
            case '10x10': this.price=100;
            break;
            case '20x20': this.price=200;
            break;
            case '30x30': this.price=300;
            break;
            case '40x40': this.price=400;
            break;
            case '50x50': this.price=500;
            break;
            case '60x60': this.price=600;
            break;
             
        }
            this.price=this.price*this.photos.length*this.count;
            this.viewCtrl.dismiss({type:"photo", name:"Photos", size:this.size, count:this.count, photos:this.photos, price:this.price});
             console.log("modal"+this.photos);
        }
    }
    countCreatePlus(){
        this.count++;
}
countCreateMinus(){
    if(this.count!=1){
        this.count--;
    }
}
}