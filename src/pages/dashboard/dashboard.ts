import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { LoginPage } from "../login/login";

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  logOut() {
      let confirm = this.alertCtrl.create({
        title: 'Logout',
        message: 'Are you sure? Logout your account?',
        buttons: [
          {
            text: 'No',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'Yes',
            handler: () => {
              (<any>window).AccountKitPlugin.logOut();
              this.navCtrl.setRoot(LoginPage);
            }
          }
        ]
      });
      confirm.present();
        
    }

}
