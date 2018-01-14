import { Component } from '@angular/core';
import { ViewController, NavController } from "ionic-angular";
import { Cemail } from "../code-email/code-email";
import { Ctel } from "../code-tel/code-tel";

@Component({
  selector: 'model-page1',
  templateUrl: 'regmodal.html'
})
export class RegModal {
  constructor(
    public viewCtrl: ViewController,
    public navCtrl:NavController
  ) {
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