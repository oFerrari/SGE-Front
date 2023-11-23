import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { MotoristaDTO } from 'src/app/models/MotoristaDTO';
import { MotoristaService } from 'src/app/services/domain/motorista.service';

@Component({
  selector: 'app-sel-motorista',
  templateUrl: './sel-motorista.page.html',
  styleUrls: ['./sel-motorista.page.scss'],
})
export class SelMotoristaPage implements OnInit {
  motoristas: MotoristaDTO[] = [];
  motoristaSelecionadoId: number | null = null;
  searchTerm: string = '';
  detalhesVisiveis: boolean = false;

  constructor(
    public motoristaService: MotoristaService,
    private navController: NavController,
    private alertController: AlertController,
  ) {}

  ionViewDidEnter(){
    this.motoristaService.findAll()
                           .subscribe({
                              next: 
                                (response) => this.motoristas = response,                              
                              error:
                                (error) => console.log(error)
                           });
  }

  filterMotoristas(): MotoristaDTO[] {
    if (this.searchTerm === '') {
      return this.motoristas;
    }

    const filteredMotoristas = this.motoristas.filter((motorista) => {
      return motorista.nome.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        motorista.cnh.toLowerCase().includes(this.searchTerm.toLowerCase());
    });

    return filteredMotoristas;
  }

  detalhesMotorista(motoristaId: number) {
    this.motoristaSelecionadoId = motoristaId;
    this.detalhesVisiveis = true
  }

  fecharDetalhesMotorista() {
    this.motoristaSelecionadoId = null;
    this.detalhesVisiveis = false
  }

  addEditMotorista() {
    this.navController.navigateForward('add-edit-motorista')
  }

  async excluirMotorista(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar Exclusão',
      message: 'Tem certeza de que deseja excluir este motorista?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Excluir',
          handler: () => {
            this.motoristaService.delete(id).subscribe(
              (response) => {
                this.motoristas = this.motoristas.filter(motorista => motorista.id !== id);
                this.presentAlert('Sucesso', 'O motorista foi apagado com sucesso', ['Ok']);
              },
              (error) => {
                if (error.status === 400) {
                  this.presentAlert('Ops', 'Este usuário pode estar sendo usado', ['Ok']);
                } else {
                  this.presentAlert('Erro', 'Ocorreu um erro ao excluir o motorista', ['Ok']);
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
