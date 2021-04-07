import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Stay1Page}from '../stay1/stay1';
import{Stay2Page}from '../stay2/stay2';
import{Stay3Page}from '../stay3/stay3';
import{Stay4Page}from '../stay4/stay4';
import{Stay5Page}from '../stay5/stay5';
import{Stay6Page}from '../stay6/stay6';
import{Stay7Page}from '../stay7/stay7';
import{Stay8Page}from '../stay8/stay8';
import{Stay9Page}from '../stay9/stay9';
import{Stay10Page}from '../stay10/stay10';
import{Stay11Page}from '../stay11/stay11';
import{Stay12Page}from '../stay12/stay12';

/**
 * Generated class for the List3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list3',
  templateUrl: 'list3.html',
})
export class List3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gostay1(_item)
  { 
    this.navCtrl.push(Stay1Page);
  }
  gostay2(_item)
  { 
    this.navCtrl.push(Stay2Page);
  }
  gostay3(_item)
  { 
    this.navCtrl.push(Stay3Page);
  }
  gostay4(_item)
  { 
    this.navCtrl.push(Stay4Page);
  }
  gostay5(_item)
  { 
    this.navCtrl.push(Stay5Page);
  }
  gostay6(_item)
  { 
    this.navCtrl.push(Stay6Page);
  }
  gostay7(_item)
  { 
    this.navCtrl.push(Stay7Page);
  }
  gostay8(_item)
  { 
    this.navCtrl.push(Stay8Page);
  }
  gostay9(_item)
  { 
    this.navCtrl.push(Stay9Page);
  }
  gostay10(_item)
  { 
    this.navCtrl.push(Stay10Page);
  }
  gostay11(_item)
  { 
    this.navCtrl.push(Stay11Page);
  }
  gostay12(_item)
  { 
    this.navCtrl.push(Stay12Page);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad List3Page');
  }

}
