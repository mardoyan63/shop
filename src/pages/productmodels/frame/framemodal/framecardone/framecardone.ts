import { Component, Input, ViewChild,Output,EventEmitter } from "@angular/core";
import { ViewController, Slides } from "ionic-angular";

@Component({
    selector: "card-one",
    templateUrl: "framecardone.html"
})
export class CardOne{   
    str:string="Name";
    @ViewChild(Slides) slides: Slides;
    constructor(public viewCtrl: ViewController){}
    @Input() data;

    @Output() show_details = new EventEmitter()

    @Output()  select = new EventEmitter();
    next(){
        this.slides.slideNext(500);
    }
    back(){
        this.slides.slidePrev(500)
    }
    showcard(){
        this.show_details.emit()
    }
    buy(){
        this.select.emit()
    }
}