import { Component, ViewChild } from "@angular/core";
import { ViewController } from "ionic-angular";
import { Slides } from 'ionic-angular';
const  FRAMES=[
    {name:"Christmas", photocount: '3', price: 1000, delivery:5000, photos:["assets/iconsmall.png","assets/1024.png","assets/1024x500.png"], B:false, photo:"assets/iconsmall.png"},
    {name:"Christmas", photocount: '3', price: 2000, delivery:4000, photos:["assets/iconsmall.png","assets/1024.png","assets/1024x500.png"], B:false, photo:"assets/iconsmall.png"},
    {name:"Christmas", photocount: '3', price: 3000, delivery:3000, photos:["assets/iconsmall.png","assets/1024.png","assets/1024x500.png"], B:false, photo:"assets/iconsmall.png"},
    {name:"Frames", photocount: '3', price: 4000, delivery:2000, photos:["assets/iconsmall.png","assets/1024.png","assets/1024x500.png"], B:false, photo:"assets/iconsmall.png"},
    {name:"Frames", photocount: '3', price: 5000, delivery:1000, photos:["assets/iconsmall.png","assets/1024.png","assets/1024x500.png"], B:false, photo:"assets/iconsmall.png"},
    {name:"Frames", photocount: '3', price: 6000, delivery:8000, photos:["assets/iconsmall.png","assets/1024.png","assets/1024x500.png"], B:false, photo:"assets/iconsmall.png"},
];
@Component({
    selector: "fmodal-page",
    templateUrl: "fmodal.html"
})
export class Fmodal{
    openitems:boolean=false;
    price:number=0;
    frames=FRAMES;
    constructor(public viewCtrl: ViewController){}
     dismiss() {
        this.viewCtrl.dismiss();
    for(let i=0; i<this.frames.length; i++){
                this.frames[i].B=false
            }
 }
 
filterItems(ev:any){
    this.frames=FRAMES;
     let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.frames = this.frames.filter(function(item) {
        return item.name.toLowerCase().startsWith(val.toLowerCase());
      });
}
}
    buy(i){
            
        }
        showcard(i){
        for(let j=0; j<this.frames.length; j++){
            if(j==i){
                this.frames[j].B=!this.frames[j].B;
            }
            else{
            this.frames[j].B=false; 
            }
    }
}
selectData(frame){
    this.viewCtrl.dismiss(frame);
            for(let i=0; i<this.frames.length; i++){
                this.frames[i].B=false
            }
}
}