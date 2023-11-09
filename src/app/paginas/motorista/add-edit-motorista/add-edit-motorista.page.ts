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
    if(!this.modoDeEdicao){
      this.motoristaService.insert(this.motoristaForm.value)
      .subscribe(response => {
       this.presentAlert('Sucesso',
         'O motorista foi salvo com sucesso',
         ['Ok']);
      })
    }

    if(this.modoDeEdicao){
      this.motoristaService.update(this.motoristaForm.value)
      .subscribe(response => {
       this.presentAlert('Sucesso',
         'O motorista foi atualizado com sucesso',
         ['Ok'])
      })
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
          CPF: [response.CPF, Validators.required], 
          CNH: [response.CNH, Validators.required], 
          endereco: [response.endereco, Validators.required], 
          telefone: [response.telefone, Validators.required], 
          email: [response.email, Validators.required]
        })
      })
    } else {
      this.modoDeEdicao = false;
      this.motoristaForm = this.formBuilder.group({
        id,
        nome: ['', Validators.required],
        CPF: ['', Validators.required], 
        CNH: ['', Validators.required], 
        endereco: ['', Validators.required], 
        telefone: ['', Validators.required], 
        email: ['', Validators.required]
      })
    }
    this.motoristaService.delete(id)
                           .subscribe({
                              next: 
                                (response) => window.location.reload(),                              
                              error:
                                (error) => console.log(error)
                           });
  }
  
  async presentAlert(header: string, message: string, buttons: string[]) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navController.navigateForward('tabs/tab1');            
          }
        }
      ]
    });
    

    await alert.present();
  }
  

  
}
