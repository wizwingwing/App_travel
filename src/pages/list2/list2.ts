import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Page1Page}from '../page1/page1';
import{Page2Page}from '../page2/page2';
import{Page3Page}from '../page3/page3';
import{Page4Page}from '../page4/page4';
import{Page5Page}from '../page5/page5';
import{Page6Page}from '../page6/page6';
import{Page7Page}from '../page7/page7';
import{Page8Page}from '../page8/page8';
import{Page9Page}from '../page9/page9';
import{Page10Page}from '../page10/page10';

/**
 * Generated class for the List2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list2',
  templateUrl: 'list2.html',
})
export class List2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gopage1(_item)
  { 
    this.navCtrl.push(Page1Page);
  }
  gopage2(_item)
  {
    this.navCtrl.push(Page2Page);
  }
  gopage3(_item)
  {
    this.navCtrl.push(Page3Page);
  }
  gopage4(_item)
  {
    this.navCtrl.push(Page4Page);
  }
  gopage5(_item)
  { 
    this.navCtrl.push(Page5Page);
  }
  gopage6(_item)
  {
    this.navCtrl.push(Page6Page);
  }
  gopage7(_item)
  {
    this.navCtrl.push(Page7Page);
  }
  gopage8(_item)
  {
    this.navCtrl.push(Page8Page);
  }
  gopage9(_item)
  {
    this.navCtrl.push(Page9Page);
  }
  gopage10(_item)
  {
    this.navCtrl.push(Page10Page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad List2Page');
  }
  

}
