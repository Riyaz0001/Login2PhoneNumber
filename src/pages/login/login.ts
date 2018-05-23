import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



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
    (<any>window).AccountKitPlugin.loginWithPhoneNumber({
        useAccessToken: true,
        defaultCountryCode: "BD",
        facebookNotificationsEnabled: true
    }, (data) => {
      (<any>window).AccountKitPlugin.getAccount((result) => {
        this.navCtrl.setRoot('DashboardPage');

      }, (err) => {
        alert('Phone Auth Error: ' + JSON.stringify(err))
      })
    })
  }

}
