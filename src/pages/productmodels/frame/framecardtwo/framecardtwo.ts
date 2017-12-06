import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CardOne } from "../framemodal/framecardone/framecardone";

@Component({
    selector: "card-two",
    templateUrl: "framecardtwo.html"
})
export class CardTwo extends CardOne{
    @Input() framedata;
    @Output() function1=new EventEmitter();
    next(){
        super.next();
    }
    back(){
        super.back();
    }
    openBasicModal(){
        this.function1.emit();        
    }
}