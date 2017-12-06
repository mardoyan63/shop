import { Component } from "@angular/core";
import { NavController, ModalController, AlertController } from "ionic-angular";
import { HomePage } from "../../../pages/home/home";
import { LocalStorage } from "../../services/localstorage.service";
import { Facebook,FacebookLoginResponse} from "@ionic-native/facebook";
import { Service } from "../../services/service";
import { RegModal } from "../regmodal/regmodal";
import { Cemail } from "../code-email/code-email";
import { Ctel } from "../code-tel/code-tel";
import { GooglePlus } from '@ionic-native/google-plus';

@Component({
    selector: 'reg-page',
    templateUrl: 'reg.html',
    providers:[GooglePlus]
})

export class Reg{
    userData:any;
    name:string='';
    email:string='';
    tel:string='';
    password:string='';

    t:boolean=false;
    
    nameErr:string='nameErr';
    passwordErr:string='passwordErr';
    telEmailErr:string='telEmailErr';
    public maskTel = [' ', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/,/\d/];
    constructor(private googlePlus: GooglePlus, 
        public ac:AlertController, 
        public mc:ModalController, 
        private service:Service, 
        private facebook:Facebook,
        public navCtrl:NavController, 
        public ls:LocalStorage){}
    sing(){
        this.t=false;
        this.ls.setIt('username',this.name);
        this.ls.setIt('email',this.email);
        this.ls.setIt('tel',this.tel);
        this.ls.setIt('password',this.password);
        for(let i=0; i<this.tel.length; i++){
            if(this.tel[i]!='*'){
                this.t=true;
            }
            else{
                this.t=false;
            }
        }
        if(this.name.length>5){
        if(this.email.length>0 || this.t){
            if(this.email.length>0 && this.t){
                if(this.password.length>5){
                this.openBasicModal();
                return;
            }
             else{
                 console.log('password-err');
                 this.doAlert(this.passwordErr);
                 return;
            }
            }

                 if(this.email.length>0){
             if(this.password.length>5){
                this.navCtrl.push(Cemail);
                return;
            }
             else{
                 console.log('password-err');
                 this.doAlert(this.passwordErr);
                 return;
            }
        }
         if(this.t){
             if(this.password.length>5){
                this.navCtrl.push(Ctel);
                return;
            }
             else{
                 console.log('password-err');
                 this.doAlert(this.passwordErr);
                 return;
            }
        }
            } 
        else{
            console.log('email-err & tel-err');
            this.doAlert(this.telEmailErr);
        }
        ////////////////
       
        }
        else{
            console.log('name-err');
           this.doAlert(this.nameErr);
        }
    }
    loginWithFB()
    {
        this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
////////////////////////////////////////////////
        this.ls.setIt('username',this.userData.username);
        this.navCtrl.setRoot(HomePage);
    });
 },
);
  }
loginGoogle(){
   this.googlePlus.login({}).then(
        function (obj) {
            alert(JSON.stringify(obj)); // do something useful instead of alerting
        }
    ).catch(
        function (msg) {
            alert('error: ' + msg);
        }
    )
    

}
openBasicModal() {
    let myModal = this.mc.create(RegModal);
    myModal.present();
    myModal.onDidDismiss((data,rol)=>{
        if(data){
        this.navCtrl.push(data["next"])
        }
    })
  }
doAlert(str:string) {
    let alert = this.ac.create({
      title: 'New Friend!',
      subTitle: str,
      buttons: ['Ok'],
      mode: 'ios'
    });

    alert.present();
  }
  back(){
      this.navCtrl.pop(this.navCtrl);
  }
}