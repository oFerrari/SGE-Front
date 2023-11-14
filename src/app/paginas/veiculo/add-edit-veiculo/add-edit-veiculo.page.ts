import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { MotoristaService } from 'src/app/services/domain/motorista.service';
import { VeiculoService } from 'src/app/services/domain/veiculo.service';

@Component({
  selector: 'app-add-edit-veiculo',
  templateUrl: './add-edit-veiculo.page.html',
  styleUrls: ['./add-edit-veiculo.page.scss'],
})
export class AddEditVeiculoPage implements OnInit {
  public modoDeEdicao = false;

  veiculoForm!: FormGroup;
  motoristas: any[] = [];

  constructor(private formBuilder: FormBuilder,
              private alertController: AlertController,
              private navController: NavController,
              private route: ActivatedRoute,
              public veiculoService: VeiculoService,
              public motoristaService: MotoristaService) { }

  submit(){
    if(!this.modoDeEdicao){
      this.veiculoService.insert(this.veiculoForm.value)
      .subscribe(response => {
       this.presentAlert('Sucesso',
         'O veiculo foi salvo com sucesso',
         ['Ok']);
      })
    }

    if(this.modoDeEdicao){
      this.veiculoService.update(this.veiculoForm.value)
      .subscribe(response => {
       this.presentAlert('Sucesso',
         'O veiculo foi atualizado com sucesso',
         ['Ok'])
      })
    } 

  }
  

  ngOnInit() {
    this.loadMotoristas()

    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    
    if(id > 0){
      this.modoDeEdicao = true;
      this.veiculoService.findById(id).subscribe(response => {
        this.veiculoForm = this.formBuilder.group({
          id: [response.id],      
          modelo: [response.modelo, Validators.required],
          placa: [response.placa, Validators.required], 
          renavam: [response.renavam, Validators.required], 
          capacidade: [response.capacidade, Validators.required], 
          motoristaId: ['', Validators.required],
        })
      })
    } else {
      this.modoDeEdicao = false;
      this.veiculoForm = this.formBuilder.group({
        id,
        modelo: ['', Validators.required],
        placa: ['', Validators.required], 
        renavam: ['', Validators.required], 
        capacidade: ['', Validators.required], 
        motoristaId: ['']
      })
    }
    
  }

  loadMotoristas() {
    this.motoristaService.findAll().subscribe(
      (data: any[]) => {
        this.motoristas = data; // Supondo que a estrutura dos motoristas seja uma lista de objetos
      },
      (error: any) => { // Adicione um tipo explícito para o parâmetro 'error'
        console.error('Erro ao buscar motoristas', error);
      }
    );
  }
  
  
  
  async presentAlert(header: string, message: string, buttons: string[]) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navController.navigateForward('tabs/tab2');            
          }
        }
      ]
    });
    

    await alert.present();
  }
  
  
}
