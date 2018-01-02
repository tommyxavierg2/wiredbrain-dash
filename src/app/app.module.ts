import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { IonicStorageModule } from '@ionic/storage';
import { RewardModPageModule } from '../pages/reward-mod/reward-mod.module';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RewardServiceProvider } from '../providers/reward-service/reward-service';

export const firebaseConfig = {
  apiKey: "AIzaSyC0fZAWCZAvGZY_AMKA9G6J6cbJlqlETME",
  authDomain: "wiredbrain-dash-518ab.firebaseapp.com",
  databaseURL: "https://wiredbrain-dash-518ab.firebaseapp.com",
  storageBucket: "wiredbrain-dash-518ab.appspot.com",
  messagingSenderId: "419774331934"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    RewardModPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    RewardServiceProvider
  ]
})
export class AppModule {}
