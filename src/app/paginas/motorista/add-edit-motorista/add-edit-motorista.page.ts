import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { MotoristaService } from 'src/app/services/domain/motorista.service';

@Component({
  selector: 'app-add-edit-motorista',
  templateUrl: './add-edit-motorista.page.html',
  styleUrls: ['./add-edit-motorista.page.scss'],
})
export class AddEditMotoristaPage implements OnInit {
  public modoDeEdicao = false;

  motoristaForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private alertController: AlertController,
              private navController: NavController,
              private route: ActivatedRoute,
              public motoristaService: MotoristaService) { }

  submit(){
   
    if (this.motoristaForm.valid) {
      if (!this.modoDeEdicao) {
        this.motoristaService.insert(this.motoristaForm.value)
          .subscribe(response => {
            this.presentAlert('Sucesso', 'O motorista foi salvo com sucesso', ['Ok']);
          });
      } else {
        this.motoristaService.update(this.motoristaForm.value)
          .subscribe(response => {
            this.presentAlert('Sucesso', 'O motorista foi atualizado com sucesso', ['Ok']);
          });
      }
    } else {
      console.log("Formulário inválido. Preencha todos os campos obrigatórios.");
    }

  }
  

  ngOnInit() {

    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    
    if(id > 0){
      this.modoDeEdicao = true;
      this.motoristaService.findById(id).subscribe(response => {
        this.motoristaForm = this.formBuilder.group({
          id: [response.id],      
          nome: [response.nome, Validators.required],
          cpf: [response.cpf, Validators.required], 
          cnh: [response.cnh, Validators.required], 
          endereco: [response.endereco, Validators.required], 
          telefone: [response.telefone, Validators.required], 
          email: [response.email, Validators.required],
        })
      })
    } else {
      this.modoDeEdicao = false;
      this.motoristaForm = this.formBuilder.group({
        id,
        nome: ['', Validators.required],
        cpf: ['', Validators.required], 
        cnh: ['', Validators.required], 
        endereco: ['', Validators.required], 
        telefone: ['', Validators.required], 
        email: ['', Validators.required],
      })
    }
    
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
