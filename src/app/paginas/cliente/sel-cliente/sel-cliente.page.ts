import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ClienteDTO } from 'src/app/models/ClienteDTO';
import { ClienteService } from 'src/app/services/domain/cliente.service';

@Component({
  selector: 'app-sel-cliente',
  templateUrl: './sel-cliente.page.html',
  styleUrls: ['./sel-cliente.page.scss'],
})
export class SelClientePage implements OnInit {
  clientes: ClienteDTO[] = [];
  clienteSelecionadoId: number | null = null;
  searchTerm: string = '';
  detalhesVisiveis: boolean = false;

  constructor(
    public clienteService: ClienteService,
    private navController: NavController,
    private alertController: AlertController,
  ) {}

  ionViewDidEnter(){
    this.clienteService.findAll()
                           .subscribe({
                              next: 
                                (response) => this.clientes = response,                              
                              error:
                                (error) => console.log(error)
                           });
  }

  filterClientes(): ClienteDTO[] {
    if (this.searchTerm === '') {
      return this.clientes;
    }

    const filteredClientes = this.clientes.filter((cliente) => {
      return cliente.nome.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        cliente.endereco.toLowerCase().includes(this.searchTerm.toLowerCase());
    });

    return filteredClientes;
  }

  detalhesCliente(clienteId: number) {
    this.clienteSelecionadoId = clienteId;
    this.detalhesVisiveis = true
  }

  fecharDetalhesCliente() {
    this.clienteSelecionadoId = null;
    this.detalhesVisiveis = false
  }

  addEditCliente() {
    this.navController.navigateForward('add-edit-cliente')
  }

  async excluirCliente(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar Exclusão',
      message: 'Tem certeza de que deseja excluir este cliente?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Excluir',
          handler: () => {
            this.clienteService.delete(id).subscribe(
              (response) => {
                this.clientes = this.clientes.filter(cliente => cliente.id !== id);
                this.presentAlert('Sucesso', 'O cliente foi apagado com sucesso', ['Ok']);
              },
              (error) => {
                if (error.status === 400) {
                  this.presentAlert('Ops', 'Este usuário pode estar sendo usado', ['Ok']);
                } else {
                  this.presentAlert('Erro', 'Ocorreu um erro ao excluir o cliente', ['Ok']);
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
