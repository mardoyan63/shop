import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalStorage } from "../../app/services/localstorage.service";
import { OrderComponent } from "../order/order";
import { Frame } from "../productmodels/frame/frame";
import { Photo } from "../productmodels/photo/photo";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

modalPages: Array<{component:any, title:string, index:number}>;
  constructor(private ls:LocalStorage, public navCtrl: NavController) {  
  }
ngOnInit(){
  this.setItems()
}
  setItems() {
    this.modalPages = [
      {component: Photo, title:"Photos", index: 1},
      {component: Frame, title: "Frames", index: 2}
    ];
  }
  filterItems(ev: any) {
    this.setItems() 
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.modalPages = this.modalPages.filter(function(item) {
        return item.title.toLowerCase().startsWith(val.toLowerCase());
      });
    }
  }
  openOrders(item){
    this.navCtrl.push(OrderComponent,{index:item.index});
  }
}
