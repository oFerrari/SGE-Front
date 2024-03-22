import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-painel-administrador',
  templateUrl: './painel-administrador.page.html',
  styleUrls: ['./painel-administrador.page.scss'],
})
export class PainelAdministradorPage implements OnInit {
  isMobile: boolean = false;

  constructor(private platform: Platform, private inAppBrowser: InAppBrowser) { }

  ngOnInit() {
    // Verifica se a largura da tela é menor que 768 pixels (indicativo de um dispositivo móvel)
    this.isMobile = window.innerWidth < 768;

    // Abre o navegador inAppBrowser apenas se estiver no modo mobile
    if (this.isMobile) {

    } else {
      const browser = this.inAppBrowser.create('http://localhost:8201/painel-administrador', '_self');
      browser.show();
    }
  }
}
