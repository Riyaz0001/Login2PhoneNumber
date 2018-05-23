import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginWithPhone() {
    cordova.AccountKitPlugin.loginWithPhoneNumber({
        useAccessToken: true,
        defaultCountryCode: "BD",
        facebookNotificationsEnabled: true
    }, (data) => {
      
      cordova.AccountKitPlugin.getAccount((result) => {
        this.navCtrl.setRoot('DashboardPage');

      }, (err) => {
        alert('Phone Auth Error: ' + JSON.stringify(err))
      })

    })
  }

}
