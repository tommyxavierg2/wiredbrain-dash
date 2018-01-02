import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the RewardModPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reward-mod',
  templateUrl: 'reward-mod.html',
})
export class RewardModPage {

  displayParam: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController) {
  this.displayParam = navParams.get('rewardParam');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RewardModPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
