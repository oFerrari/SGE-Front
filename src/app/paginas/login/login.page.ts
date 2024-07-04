import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public nav: NavController,
    public menu: MenuController) { }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    this.menu.enable(true);
  }

  /* logar() {
    window.open('http://localhost:4200/', '_self');
  } */
  
  /* logar() {
      this.nav.navigateForward('tabs/tab1');
  } */

  logar() {
      this.nav.navigateForward('painel-administrador');
  }

  registrar() {
    this.nav.navigateForward('add-edit-administrador');
  }


  ngOnInit() {  }
  
}