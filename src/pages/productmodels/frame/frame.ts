import { Component, ViewChild } from "@angular/core";
import { ViewController, ModalController, Slides } from "ionic-angular";
import { Fmodal } from "./framemodal/fmodal";
import { CardOne } from "./framemodal/framecardone/framecardone";

@Component({
    selector: "frame-page",
    templateUrl: "frame.html"
})
export class Frame{
    B:boolean=false;
    @ViewChild(Slides) slides: Slides;
    obj;
constructor(public vc:ViewController, public modalCtrl: ModalController){
    console.log(this.obj);
    
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
           console.log(this.obj);
        }
    })
  }
}