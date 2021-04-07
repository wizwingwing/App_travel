import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { List1Page } from '../pages/list1/list1';
import { List2Page } from '../pages/list2/list2';
import { List3Page } from '../pages/list3/list3';
import { List4Page } from '../pages/list4/list4';
import { SloganPage } from '../pages/slogan/slogan';
import { Stay1Page } from '../pages/stay1/stay1';
import { Stay2Page } from '../pages/stay2/stay2';
import { Stay3Page } from '../pages/stay3/stay3';
import { Stay4Page } from '../pages/stay4/stay4';
import { Stay5Page } from '../pages/stay5/stay5';
import { Stay6Page } from '../pages/stay6/stay6';
import { Stay7Page } from '../pages/stay7/stay7';
import { Stay8Page } from '../pages/stay8/stay8';
import { Stay9Page } from '../pages/stay9/stay9';
import { Stay10Page } from '../pages/stay10/stay10';
import { Stay11Page } from '../pages/stay11/stay11';
import { Stay12Page } from '../pages/stay12/stay12';
import { Page1Page } from '../pages/page1/page1';
import { Page2Page } from '../pages/page2/page2';
import { Page3Page } from '../pages/page3/page3';
import { Page4Page } from '../pages/page4/page4';
import { Page5Page } from '../pages/page5/page5';
import { Page6Page } from '../pages/page6/page6';
import { Page7Page } from '../pages/page7/page7';
import { Page8Page } from '../pages/page8/page8';
import { Page9Page } from '../pages/page9/page9';
import { Page10Page } from '../pages/page10/page10';
import { Give1Page } from '../pages/give1/give1';
import { Give2Page } from '../pages/give2/give2';
import { Give3Page } from '../pages/give3/give3';
import { Give4Page } from '../pages/give4/give4';
import { Give5Page } from '../pages/give5/give5';
import { Give6Page } from '../pages/give6/give6';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    List1Page,
    List2Page,
    List3Page,
    List4Page,
    SloganPage,
    Stay1Page,Stay2Page,Stay3Page,Stay4Page,Stay5Page,Stay6Page,Stay7Page,Stay8Page,
    Stay9Page,Stay10Page,Stay11Page,Stay12Page,
    Page1Page,Page2Page,Page3Page,Page4Page,
    Page5Page,Page6Page,Page7Page,Page8Page,
    Page9Page,Page10Page,
    Give1Page, Give2Page, Give3Page, Give4Page, Give5Page, Give6Page

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    List1Page,
    List2Page,
    List3Page,
    List4Page,
    SloganPage,
    Stay1Page,Stay2Page,Stay3Page,Stay4Page,Stay5Page,Stay6Page,Stay7Page,Stay8Page,
    Stay9Page,Stay10Page,Stay11Page,Stay12Page,
    Page1Page,Page2Page,Page3Page,Page4Page,
    Page5Page,Page6Page,Page7Page,Page8Page,
    Page9Page,Page10Page,
    Give1Page, Give2Page, Give3Page, Give4Page, Give5Page, Give6Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
