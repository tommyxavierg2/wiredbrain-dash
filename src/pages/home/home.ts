import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { UserServiceProvider } from '../../providers/user-service/user-service';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  menuData = [
    { title: "Our Menu", pic: '../assets/imgs/soup1.png', pushPage: 'MenuPage' },
    { title: "Account", pic: '../assets/imgs/coffee-people.jpg', pushPage: 'AccountPage' },
    { title: "About us", pic: '../assets/imgs/coffee6.png', pushPage: 'AboutPage' },
    { title: "Locations", pic: '../assets/imgs/cafe2.png', pushPage: 'LocationsPage' }
  ];

  logPage: any;
  loggedIn: any;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, private userService: UserServiceProvider) {
  }

  ngOnInit() {
    this.logPage = 'LoginPage';
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.loggedIn = user.email;
      }
    });
  }

  signOff() {
    this.userService.logOut();
    this.loggedIn = '';
  }

  myPagePush(page) {
    this.navCtrl.push(page)
    .then(result => {
      if(!result) {
        this.userService.displayAlert('Sorry', 'You must first register an account');
      }
    })
  }

}
