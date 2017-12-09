import { Component, ViewChild } from "@angular/core";
import { ViewController, ModalController, Slides, AlertController } from "ionic-angular";
import { Fmodal } from "./framemodal/fmodal";
import { CardOne } from "./framemodal/framecardone/framecardone";
import { ImagePicker, ImagePickerOptions } from "@ionic-native/image-picker";

const PHOTOS=[]

@Component({
    selector: "frame-page",
    templateUrl: "frame.html",
    providers:[ ImagePicker]
})
export class Frame{
    options:ImagePickerOptions={maximumImagesCount: 1, width: 100, height:100, quality: 50};
    photos=PHOTOS;
    photocount=0;
    B:boolean=false;
    @ViewChild(Slides) slides: Slides;
    obj;
constructor(public alertCtrl: AlertController, private imagePicker: ImagePicker, public vc:ViewController, public modalCtrl: ModalController){
    this.openBasicModal();
    
}

    dismiss(){
        this.vc.dismiss();
    }
    openBasicModal() {
        this.B=false;
    let myModal = this.modalCtrl.create(Fmodal);
    myModal.present();
        myModal.onWillDismiss((data,rol)=>{
        if(data){
            this.obj=data;
            let arr:Array<string>=[];
            for(let i=0; i<this.obj.photocount; i++){
                arr.push("assets/back.png");
            }
            this.photos=[{photos:arr, count:1}];
        }
    })
  }
  newItem(){
       let arr:Array<string>=[];
       for(let i=0; i<this.obj.photocount; i++){
                arr.push("assets/back.png");
            }
            this.photos.push({photos:arr, count:1});
  }
        getPhoto(j,k){
            this.imagePicker.getPictures(this.options).then((results) => {
  for (var i = 0; i < results.length; i++) {
      console.log('Image URI: ' + results[i]);
        this.photos[j].photos[k]=results[i];
  }
}, (err) => { });
        }
countCreatePlus(j){
        this.photos[j].count++;
}
countCreateMinus(j){
    if(this.photos[j].count!=1){
        this.photos[j].count--;
    }
}
closeItem(j){
    this.photos.splice(j,1);
}
 doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Err!',
      subTitle: 'Add all photos!',
      buttons: ['Ok']
    });

    alert.present();
  }
buy(){
    for(let i=0; i<this.photos.length; i++){
        for(let j=0; j<this.photos[i].photos.length; j++){
            if(this.photos[i].photos[j]!="assets/back.png"){
                this.vc.dismiss();
                return;
            }
            else{
                this.doAlert();
                return;
            }
        }
    }
    
}
}