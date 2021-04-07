import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import{List3Page}from '../list3/list3';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  golist3(_item)
  { 
    this.navCtrl.push(List3Page);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
