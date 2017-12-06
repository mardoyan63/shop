import { Component } from '@angular/core';
import { NavParams, ViewController, NavController } from "ionic-angular";
import { Cemail } from "../code-email/code-email";
import { Ctel } from "../code-tel/code-tel";

@Component({
  selector: 'model-page1',
  templateUrl: 'regmodal.html'
})
export class RegModal {
  myParam: string;

  constructor(
    public viewCtrl: ViewController,
    params: NavParams,
    public navCtrl:NavController
  ) {
    this.myParam = params.get('myParam');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  email(){
    this.viewCtrl.dismiss({next:Cemail})
    
  }
  tel(){
    
    this.viewCtrl.dismiss({next:Ctel})
  }
}