import { Component } from "@angular/core";
import { Reg } from "../reg/reg";
import { NavController } from "ionic-angular";
import { HomePage } from "../../../pages/home/home";

@Component({
    selector: 'sing-page',
    templateUrl:'sing.html'
})
export class Sing{
    constructor(public navCtrl:NavController){}
    
    singUp(){
        this.navCtrl.push(Reg);
    }
}