import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { Sing } from "./pages/sing/sing";
import { Start } from "./pages/start/start";
import { LocalStorage } from "./services/localstorage.service";
import { Service } from "./services/service";
import { Load } from "./pages/loading/loading";
import { ProfilePage } from "../pages/profile/profile";
import { OrderComponent } from "../pages/order/order";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Load;
  city:string='your city;' 
  pages: Array<{title: string, component: any}>;

  constructor(private service:Service, private ls:LocalStorage, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Edit Profile', component: ProfilePage},
      { title: 'Home', component: HomePage },
      { title: 'Order', component: OrderComponent}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      if(this.ls.getIt('start')||false){
        if(this.ls.getIt('code')||false){
          this.rootPage=HomePage;
        }
        else{
           this.rootPage=Sing;
        }
    }
    else{
        this.rootPage=Start; 
    }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.component!=HomePage){
      this.nav.setRoot(HomePage);
      this.nav.push(page.component);
    }
    else{
      this.nav.setRoot(page.component);
    }
    
  }
}
