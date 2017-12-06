import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { HomePage } from "../../../pages/home/home";
import { Reg } from "../reg/reg";
import { LocalStorage } from "../../services/localstorage.service";

@Component({
    selector: 'c-tel',
    templateUrl: 'code-tel.html'
})
export class Ctel{
    code:string='';
    public mask = [/\d/,' ', /\d/,' ',/\d/,' ',/\d/,];
    constructor(public navCtrl:NavController, private ls:LocalStorage){}
    setcode(){
        this.ls.setIt('code', this.code);
        this.navCtrl.push(HomePage);
    }
    back(){
        this.navCtrl.pop(this.navCtrl);
    }
}