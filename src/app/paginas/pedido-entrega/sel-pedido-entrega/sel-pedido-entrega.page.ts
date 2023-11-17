import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { PedidoEntregaDTO } from 'src/app/models/PedidoEntregaDTO';
import { PedidoEntregaService } from 'src/app/services/domain/pedidoEntrega.service';

@Component({
  selector: 'app-sel-pedido-entrega',
  templateUrl: './sel-pedido-entrega.page.html',
  styleUrls: ['./sel-pedido-entrega.page.scss'],
})
export class SelPedidoEntregaPage implements OnInit {
  pedidoEntregas: PedidoEntregaDTO[] = [];
  pedidoEntregaSelecionadoId: number | null = null;
  searchTerm: string = '';
  detalhesVisiveis: boolean = false;

  constructor(
    public pedidoEntregaService: PedidoEntregaService,
    private navController: NavController,
    private alertController: AlertController,
  ) {}

  ionViewDidEnter(){
    this.pedidoEntregaService.findAll()
                           .subscribe({
                              next: 
                                (response) => this.pedidoEntregas = response,                              
                              error:
                                (error) => console.log(error)
                           });
  }

  filterPedidoEntregas(): PedidoEntregaDTO[] {
    if (this.searchTerm === '') {
      return this.pedidoEntregas;
    }

    const filteredPedidoEntregas = this.pedidoEntregas.filter((pedidoEntrega) => {
      return pedidoEntrega.nomeCliente.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        pedidoEntrega.destino.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
        pedidoEntrega.dataEntrega
    });

    return filteredPedidoEntregas;
  } 
  

  detalhesPedidoEntrega(pedidoEntregaId: number) {
    this.pedidoEntregaSelecionadoId = pedidoEntregaId;
    this.detalhesVisiveis = true
  }

  fecharDetalhesPedidoEntrega() {
    this.pedidoEntregaSelecionadoId = null;
    this.detalhesVisiveis = false
  }

  addEditPedidoEntrega() {
    this.navController.navigateForward('add-edit-pedidoEntrega')
  }

  async excluirPedidoEntrega(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar Exclusão',
      message: 'Tem certeza de que deseja excluir este pedidoEntrega?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Excluir',
          handler: () => {
            this.pedidoEntregaService.delete(id).subscribe(
              (response) => {
                this.pedidoEntregas = this.pedidoEntregas.filter(pedidoEntrega => pedidoEntrega.id !== id);
                this.presentAlert('Sucesso', 'O pedidoEntrega foi apagado com sucesso', ['Ok']);
              },
              (error) => {
                if (error.status === 400) {
                  this.presentAlert('Ops', 'Este usuário pode estar sendo usado', ['Ok']);
                } else {
                  this.presentAlert('Erro', 'Ocorreu um erro ao excluir o pedidoEntrega', ['Ok']);
                }
              }
            );
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlert(header: string, message: string, buttons: string[]) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: buttons.map((buttonText) => ({
        text: buttonText,
      })),
    });

    await alert.present();
  }

  ngOnInit() {
    
  }
}
