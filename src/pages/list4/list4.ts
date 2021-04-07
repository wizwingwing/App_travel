import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Give1Page}from '../give1/give1';
import{Give2Page}from '../give2/give2';
import{Give3Page}from '../give3/give3';
import{Give4Page}from '../give4/give4';
import{Give5Page}from '../give5/give5';
import{Give6Page}from '../give6/give6';

/**
 * Generated class for the List4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list4',
  templateUrl: 'list4.html',
})
export class List4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gogive1(_item)
  { 
    this.navCtrl.push(Give1Page);  
  }
  gogive2(_item)
  { 
    this.navCtrl.push(Give2Page);  
  }
  gogive3(_item)
  { 
    this.navCtrl.push(Give3Page);  
  }
  gogive4(_item)
  { 
    this.navCtrl.push(Give4Page);  
  }
  gogive5(_item)
  { 
    this.navCtrl.push(Give5Page);  
  }
  gogive6(_item)
  { 
    this.navCtrl.push(Give6Page);  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad List4Page');
  }

}
