import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { List1Page } from '../pages/list1/list1';
import { List2Page } from '../pages/list2/list2';
import { List3Page } from '../pages/list3/list3';
import { List4Page } from '../pages/list4/list4';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'หน้าแรก', component: HomePage },
      { title: 'ประวัติความเป็นมา', component: ListPage },
      { title: 'คำขวัญประจำจังหวัด', component: List1Page },
      { title: 'สถานที่ท่องเที่ยว', component: List2Page },
      { title: 'ที่พัก/โรงแรม', component: List3Page },
      { title: 'ของดีเมืองตราด', component: List4Page }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
