import { Component, ViewChild } from "@angular/core";
import { Slides, NavController } from "ionic-angular";
import { Sing } from "../sing/sing";
import { LocalStorage } from "../../services/localstorage.service";

@Component({
    selector: 'start-page',
    templateUrl: 'start.html'
})
export class Start{
    constructor(private ls:LocalStorage, private navCtrl:NavController){}
    @ViewChild(Slides) slides: Slides;
    text:string='Done';
    done(){
        if(this.slides.getActiveIndex()>1){
            this.navCtrl.setRoot(Sing);
            this.ls.setIt('start', 'start')
        }
        else{
            this.slides.slideNext(500);
        }
    }
    slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    if(currentIndex>1){
        this.text='Start';
        }
    else{
        this.text='Done';
    }
  }
}