import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { UserServiceProvider } from '../../providers/user-service/user-service';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  reg = {
    email: '',
    password: '',
    password1: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController, private afAuth: AngularFireAuth,
              private userService: UserServiceProvider) {
  }

  displayAlert(alertTitle, alertSub) {
    let theAlert = this.alertCtrl.create({
      title: alertTitle,
      subTitle: alertSub,
      buttons: ['OK']
    });
    theAlert.present();
  }

  registerAccount() {
    if (this.reg.password != this.reg.password1) {
      this.displayAlert('Password Problem!', 'Passwords do not match, please try again.');
      this.reg.password = '';
      this.reg.password1 = '';
    } else {
      this.afAuth.auth.createUserWithEmailAndPassword(this.reg.email, this.reg.password1)
        .then(res => {
          this.userService.saveNewUser(this.reg.email);
          this.regSuccess(this.reg);
        })
        .catch(err => this.displayAlert('Error!', err));
    }
  }

  regSuccess(result){
    this.userService.logOn(result.email, result.password)
       .then(res => {
         this.displayAlert(result.email, 'Account created for this email address');
         this.navCtrl.push(HomePage);
     });

  }

}
