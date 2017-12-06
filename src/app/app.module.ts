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
import { FormsModule } from '@angular/forms';
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
    CardTwo
  ],
  imports: [
    FormsModule,
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
    CardOne
  ],
  providers: [
    Facebook,
    StatusBar,
    SplashScreen,
    LocalStorage,
    Service,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
