import { Component, ViewChild } from "@angular/core";
import { ViewController } from "ionic-angular";
import { Slides } from 'ionic-angular';
const  FRAMES=[
    {name:"Christmas", photocount: 3, price: 1000, delivery:5000, photos:["assets/iconsmall.png","assets/1024.png","assets/1024x500.png"], B:false, photo:"assets/iconsmall.png", photosize:["10x10", "20x20", "30x30"]},
    {name:"Christmas", photocount: 1, price: 2000, delivery:4000, photos:["assets/iconsmall.png","assets/1024.png","assets/1024x500.png"], B:false, photo:"assets/iconsmall.png", photosize:[]},
    {name:"Christmas", photocount: 5, price: 3000, delivery:3000, photos:["assets/iconsmall.png","assets/1024.png","assets/1024x500.png"], B:false, photo:"assets/iconsmall.png", photosize:[]},
    {name:"Frames", photocount: 6, price: 4000, delivery:2000, photos:["assets/iconsmall.png","assets/1024.png","assets/1024x500.png"], B:false, photo:"assets/iconsmall.png", photosize:[]},
    {name:"Frames", photocount: 15, price: 5000, delivery:1000, photos:["assets/iconsmall.png","assets/1024.png","assets/1024x500.png"], B:false, photo:"assets/iconsmall.png", photosize:[]},
    {name:"Frames", photocount: 8, price: 6000, delivery:8000, photos:["assets/iconsmall.png","assets/1024.png","assets/1024x500.png"], B:false, photo:"assets/iconsmall.png", photosize:[]},
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
            for(let i=0; i<this.frames.length; i++){
                this.frames[i].B=false
            }
            this.viewCtrl.dismiss(frame);
}
}