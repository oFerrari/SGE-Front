import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { VeiculoDTO } from 'src/app/models/VeiculoDTO';
import { VeiculoService } from 'src/app/services/domain/veiculo.service';

@Component({
  selector: 'app-sel-veiculo',
  templateUrl: './sel-veiculo.page.html',
  styleUrls: ['./sel-veiculo.page.scss'],
})
export class SelVeiculoPage implements OnInit {
  veiculos: VeiculoDTO[] = [];
  veiculoSelecionadoId: number | null = null;
  searchTerm: string = '';
  

  constructor(
    public veiculoService: VeiculoService,
    private navController: NavController,
    private alertController: AlertController,
  ) {}

  ionViewDidEnter(){
    this.veiculoService.findAll()
                           .subscribe({
                              next: 
                                (response) => this.veiculos = response,                              
                              error:
                                (error) => console.log(error)
                           });
    
  }

  filterVeiculos(): VeiculoDTO[] {
    if (this.searchTerm === '') {
      return this.veiculos;
    }

    const filteredVeiculos = this.veiculos.filter((veiculo) => {
      return veiculo.modelo.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        veiculo.placa.toLowerCase().includes(this.searchTerm.toLowerCase());
    });

    return filteredVeiculos;
  }

  detalhesVeiculo(veiculo: VeiculoDTO) {
    this.veiculoSelecionadoId = veiculo.id;
  }
  
  


  fecharDetalhesVeiculo() {
    this.veiculoSelecionadoId = null;
  }

  addEditVeiculo() {
    this.navController.navigateForward('add-edit-veiculo')
  }

  async excluirVeiculo(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar Exclusão',
      message: 'Tem certeza de que deseja excluir este veiculo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Excluir',
          handler: () => {
            this.veiculoService.delete(id).subscribe(
              (response) => {
                this.veiculos = this.veiculos.filter(veiculo => veiculo.id !== id);
                this.presentAlert('Sucesso', 'O veiculo foi apagado com sucesso', ['Ok']);
              },
              (error) => {
                if (error.status === 400) {
                  this.presentAlert('Ops', 'Este usuário pode estar sendo usado', ['Ok']);
                } else {
                  this.presentAlert('Erro', 'Ocorreu um erro ao excluir o veiculo', ['Ok']);
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
