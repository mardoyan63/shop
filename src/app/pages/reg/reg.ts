import { Component, Directive } from "@angular/core";
import { NavController, ModalController} from "ionic-angular";
import { HomePage } from "../../../pages/home/home";
import { LocalStorage } from "../../services/localstorage.service";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
import { Service } from "../../services/service";
import { RegModal } from "../regmodal/regmodal";
import { Cemail } from "../code-email/code-email";
import { Ctel } from "../code-tel/code-tel";
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from "angularfire2";
import firbase from "firebase";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'reg-page',
    templateUrl: 'reg.html',
})

export class Reg {

    public userData: any;
    t: boolean = false;
    nameErr: string = 'nameErr';
    passwordErr: string = 'passwordErr';
    telEmailErr: string = 'telEmailErr';
    public maskTel = [' ', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
    constructor(public googlePlus: GooglePlus,
        public mc: ModalController,
        private service: Service,
        private facebook: Facebook,
        public navCtrl: NavController,
        public ls: LocalStorage,
        public form: FormBuilder
    ) { }
    ngOnInit() {
        this.userData = this.form.group({
            "name":["",Validators.compose([Validators.required,  Validators.minLength(3)])],
            "email":["",Validators.compose([Validators.required, Validators.email])],
            "tel":["",Validators.compose([Validators.required, Validators.pattern('[ ][0-9]{2}[-][0-9]{2}[-][0-9]{2}[-][0-9]{2}')])],
            "password":["",Validators.compose([Validators.required,  Validators.minLength(6)])],

        })
    }
    sing() {
        this.ls.setIt('name', this.userData.value.name);
        this.ls.setIt('email', this.userData.value.email);
        this.ls.setIt('tel', this.userData.value.tel);
        this.ls.setIt('password', this.userData.value.password);
        this.openBasicModal();
        console.log(this.userData.value);
        
    }
    loginWithFB() {
        this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
            this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
                this.userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] }
                ////////////////////////////////////////////////
                this.ls.setIt('username', this.userData.username);
                this.navCtrl.setRoot(HomePage);
            });
        },
        )
            .catch(e => console.log("err")
            )
    }
    loginGoogle() {
        let env = this;
        this.googlePlus.login({
            'webClientId': '1071245465432-2vnusrmm1j0jrvpkld97n3hik4kpkb3a.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
            'offline': true
        }).then(res => {
            firbase.auth().signInWithCredential(firbase.auth.GoogleAuthProvider.credential(res.idToken))
                .then(suc => {
                    console.log(JSON.stringify(suc));
                    console.log(suc['displayName']);
                    
                    this.ls.setIt("username", suc['displayName'])
                    this.navCtrl.setRoot(HomePage);


                })
                .catch(ns => {
                    alert("not SUC")
                });
        })
            .catch(err => console.log("err")
            )


    }
    openBasicModal() {
        let myModal = this.mc.create(RegModal);
        myModal.present();
        myModal.onDidDismiss((data, rol) => {
            if (data) {
                this.navCtrl.push(data.next)
            }
        })
    }
    back() {
        this.navCtrl.pop(this.navCtrl);
    }
}