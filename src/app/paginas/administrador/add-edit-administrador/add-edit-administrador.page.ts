import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { AdministradorService } from 'src/app/services/domain/administrador.service';

@Component({
  selector: 'app-add-edit-administrador',
  templateUrl: './add-edit-administrador.page.html',
  styleUrls: ['./add-edit-administrador.page.scss'],
})

export class AddEditAdministradorPage implements OnInit {
  public modoDeEdicao = false;

  administradorForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
    private alertController: AlertController,
    private navController: NavController,
    private route: ActivatedRoute,
    public administradorService: AdministradorService) { }

  submit(){
    if (this.administradorForm.valid) {
    if(!this.modoDeEdicao){
      this.administradorService.insert(this.administradorForm.value)
      .subscribe(response => {
       this.presentAlert('Sucesso',
         'O administrador foi salvo com sucesso',
         ['Ok']);
      })
    }

    if(this.modoDeEdicao){
      this.administradorService.update(this.administradorForm.value)
      .subscribe(response => {
       this.presentAlert('Sucesso',
         'O administrador foi atualizado com sucesso',
         ['Ok'])
      })
    } 
  }
  }
  

  ngOnInit() {

    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    
    if(id > 0){
      this.modoDeEdicao = true;
      this.administradorService.findById(id).subscribe(response => {
        this.administradorForm = this.formBuilder.group({
          id: [response.id],      
          foto: [response.foto],
          email: [response.email, Validators.required], 
          senha: [response.senha, Validators.required], 
        })
      })
    } else {
      this.modoDeEdicao = false;
      this.administradorForm = this.formBuilder.group({
        id,
        foto: ['',],
        email: ['', Validators.required], 
        senha: ['', Validators.required], 
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
            this.navController.navigateForward('login');            
          }
        }
      ]
    });
    

    await alert.present();
  }

}
