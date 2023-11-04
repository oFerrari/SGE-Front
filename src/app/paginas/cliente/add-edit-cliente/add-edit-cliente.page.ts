import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ClienteService } from 'src/app/services/domain/cliente.service';


@Component({
  selector: 'app-add-edit-cliente',
  templateUrl: './add-edit-cliente.page.html',
  styleUrls: ['./add-edit-cliente.page.scss'],
})
export class AddEditClientePage implements OnInit {
  

  public modoDeEdicao = false;

  clienteForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private alertController: AlertController,
              private navController: NavController,
              private route: ActivatedRoute,
              public clienteService: ClienteService) { }

  submit(){
    if(!this.modoDeEdicao){
      this.clienteService.insert(this.clienteForm.value)
      .subscribe(response => {
       this.presentAlert('Sucesso',
         'O cliente foi salvo com sucesso',
         ['Ok']);
      })
    }
    
    if(this.modoDeEdicao){
      this.clienteService.update(this.clienteForm.value)
      .subscribe(response => {
       this.presentAlert('Sucesso',
         'O cliente foi atualizado com sucesso',
         ['Ok'])
      })
    } 

  }

  ngOnInit() {

    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    
    if(id > 0){
      this.modoDeEdicao = true;
      this.clienteService.findById(id).subscribe(response => {
        this.clienteForm = this.formBuilder.group({
          id: [response.id],      
          nome: [response.nome, Validators.required],
          tipo: [response.tipo, Validators.required], 
          documento: [response.documento, Validators.required], 
          endereco: [response.endereco, Validators.required], 
          telefone: [response.telefone, Validators.required], 
          email: [response.email, Validators.required]
        })
      })
    } else {
      this.modoDeEdicao = false;
      this.clienteForm = this.formBuilder.group({
        id,
        nome: ['', Validators.required],
        tipo: ['', Validators.required], 
        documento: ['', Validators.required], 
        endereco: ['', Validators.required], 
        telefone: ['', Validators.required], 
        email: ['', Validators.required]
      })
    }
    
  }

  async presentAlert(header: string,
    message: string, buttons: string[],) {
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
