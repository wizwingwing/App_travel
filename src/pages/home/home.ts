import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{Stay5Page}from '../stay5/stay5';
import{Stay6Page}from '../stay6/stay6';
import{Stay11Page}from '../stay11/stay11';
import{Stay12Page}from '../stay12/stay12';
import{Give1Page}from '../give1/give1';
import{Give2Page}from '../give2/give2';
import{Give3Page}from '../give3/give3';
import{Give4Page}from '../give4/give4';
import{Give5Page}from '../give5/give5';
import{Give6Page}from '../give6/give6';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  gostay5(_item)
  { 
    this.navCtrl.push(Stay5Page);
  }
  gostay6(_item)
  { 
    this.navCtrl.push(Stay6Page);
  }
  gostay11(_item)
  { 
    this.navCtrl.push(Stay11Page);
  }
  gostay12(_item)
  { 
    this.navCtrl.push(Stay12Page);
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
    console.log('ionViewDidLoad HomePage');
  }

}
