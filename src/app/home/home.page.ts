import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
acces:string;
  constructor(public toastController: ToastController) {}
saludar(){
  this.presentToast('Bienvenido ' +  this.acces);
}  
async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
