import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LocalStorage } from "../../services/localstorage.service";
import { HomePage } from "../../../pages/home/home";
import { Reg } from "../reg/reg";

@Component({
    selector: 'c-email',
    templateUrl: 'code-email.html'
})
export class Cemail{
    code:string='';
    public mask = [/\d/,' ', /\d/,' ',/\d/,' ',/\d/,];
    constructor(public navCtrl:NavController, private ls:LocalStorage){}
    setcode(){
        this.ls.setIt('code', this.code);
        this.navCtrl.setRoot(HomePage);
    }
    back(){
        this.navCtrl.pop(this.navCtrl);
    }
}