import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Sing } from "./pages/sing/sing";
import { Reg } from "./pages/reg/reg";
import { LocalStorage } from "./services/localstorage.service";
import { Translate } from "./pipes/lengpipe";
import { Facebook } from "@ionic-native/facebook"
import { Start } from "./pages/start/start";
import { Service } from "./services/service";
import { Load } from "./pages/loading/loading";
import { TextMaskModule } from 'angular2-text-mask';
import { RegModal } from "./pages/regmodal/regmodal";
import { Cemail } from "./pages/code-email/code-email";
import { Ctel } from "./pages/code-tel/code-tel";
import { ProfilePage } from "../pages/profile/profile";
import { OrderComponent } from "../pages/order/order";
import { Panel } from "../pages/order/orderpanel/panel";
import { Photo } from "../pages/productmodels/photo/photo";
import { Frame } from "../pages/productmodels/frame/frame";
import { Fmodal } from "../pages/productmodels/frame/framemodal/fmodal";
import { CardOne } from "../pages/productmodels/frame/framemodal/framecardone/framecardone";
import { CardTwo } from "../pages/productmodels/frame/framecardtwo/framecardtwo";
import { Search } from "../pages/searchbar/search";
import { GooglePlus } from "@ionic-native/google-plus";
import {AngularFireModule} from "angularfire2";
import firbase from "firebase";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
export const firebaseConfig={
  apiKey: "AIzaSyDNt2hgmiwD0chLeyhKJvb2dJAOjByLI8w",
    authDomain: "shope-b1faf.firebaseapp.com",
    databaseURL: "https://shope-b1faf.firebaseio.com",
    projectId: "shope-b1faf",
    storageBucket: "shope-b1faf.appspot.com",
    messagingSenderId: "1071245465432"
}
firbase.initializeApp(firebaseConfig)

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Sing,
    Reg,
    Translate,
    Start,
    Load,
    RegModal,
    Cemail,
    Ctel,
    ProfilePage,
    OrderComponent,
    Panel,
    Photo,
    Frame,
    Fmodal,
    CardOne,
    CardTwo,
    Search
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    TextMaskModule,
    IonicModule.forRoot(MyApp),
    IonicPageModule.forChild(RegModal),
    IonicPageModule.forChild(Reg),
    IonicPageModule.forChild(HomePage),
    IonicPageModule.forChild(Photo),
    IonicPageModule.forChild(Frame),
    IonicPageModule.forChild(Fmodal),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Sing,
    Reg,
    Start,
    Load,
    RegModal,
    Cemail,
    Ctel,
    ProfilePage,
    OrderComponent,
    CardTwo,
    Panel,
    Photo,
    Frame,
    Fmodal,
    CardOne,
    Search
  ],
  providers: [
    Facebook,
    StatusBar,
    SplashScreen,
    LocalStorage,
    Service,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus,
  ]
})
export class AppModule {}
