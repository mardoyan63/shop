import { Component, HostListener, Output, EventEmitter, Input } from "@angular/core";
import { ModalController, NavController } from "ionic-angular";
import { Photo } from "../../productmodels/photo/photo";
import { Frame } from "../../productmodels/frame/frame";

@Component({
    selector: 'panel-tag',
    templateUrl: 'panel.html'
})
export class Panel{
    @Output() data = new EventEmitter<any>();
    @Input() index;
    openMenu:boolean=false;
    private last: MouseEvent;
  modalPages: Array<{component: any, title:string}>;
   constructor(public navCtrl:NavController,
     public modalCtrl: ModalController) {
     this.modalPages=[
         {component: Photo, title: '0'},
         {component: Frame, title: '1'}
    
   ];
   }
   ngOnInit(){
       console.log("ok!");
       console.log(this.index);
       
       if(this.index){
           this.openBasicModal(this.index-1);
       }
   }
   openBasicModal(num:number) {
    let myModal = this.modalCtrl.create(this.modalPages[num].component);
    myModal.present();
    myModal.onWillDismiss((data,rol)=>{
        if(data){
           this.data.emit(data); 
        }
    })
  }
  @HostListener('mousedown', ['$event'])
    onMousedown(event) {
        this.last = event;
        if(this.openMenu){
            this.openBasicModal(+this.last.srcElement.innerHTML);
            this.openMenu=false;
        }
        else{
            this.openMenu=true;
        }  
    }
}