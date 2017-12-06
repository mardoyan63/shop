import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalStorage } from "../../app/services/localstorage.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
items: Array<string>
  constructor(private ls:LocalStorage, public navCtrl: NavController) {  
  }
ngOnInit(){
  this.setItems()
}
  setItems() {
    this.items = ['Orange', 'Banana', 'Pear', 'Tomato', 'Grape'];
  }
  filterItems(ev: any) {
    this.setItems() 
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.items = this.items.filter(function(item) {
        return item.toLowerCase().startsWith(val.toLowerCase());
      });
    }
  }

}
