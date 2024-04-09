import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-painel-administrador',
  templateUrl: './painel-administrador.page.html',
  styleUrls: ['./painel-administrador.page.scss'],
})
export class PainelAdministradorPage implements OnInit {
  isMobile: boolean = false;

  constructor(private platform: Platform) { }

  ngOnInit() {
    // Verifica se a largura da tela é menor que 768 pixels (indicativo de um dispositivo móvel)
    this.isMobile = this.platform.width() < 768;

    // Abre a página em um navegador externo apenas se estiver no modo mobile
    if (this.isMobile) {
      // Se for mobile, exibe a mensagem para abrir em um navegador web
      console.log("Acesse esta página em um navegador web para obter a melhor experiência.");
    } else {
      // Se não for mobile, abre a página em um novo navegador
      window.open('http://localhost:8100/painel-administrador', '_blank');
    }
  }
}
