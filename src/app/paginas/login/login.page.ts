import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  administradorForm: FormGroup;

  private emailPredefinido: string = 'andrei.vinicius@estudante.ifms.edu.br ';
  private senhaPredefinida: string = '123456';

  constructor(public nav: NavController,
    public menu: MenuController,
    private fb: FormBuilder) {
      // Inicialização do formulário
    this.administradorForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
    }

    logar() {
      if (this.administradorForm.valid) {
        const { email, senha } = this.administradorForm.value;
        
        // Verifica se o email e a senha correspondem aos valores predefinidos
        if (email === this.emailPredefinido && senha === this.senhaPredefinida) {
          console.log('Login bem-sucedido!');
          this.nav.navigateForward('tabs/tab1');
        } else {
          console.log('Email ou senha incorretos.');
          this.administradorForm.setErrors({ invalidCredentials: true });
        }
      } else {
        console.log('Formulário inválido.');
        this.administradorForm.markAllAsTouched();
      }
    }


  ionViewWillEnter() {
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    this.menu.enable(true);
  }

 /*  logar() {
      this.nav.navigateForward('tabs/tab1');
  } */

  /* logar() {
      this.nav.navigateForward('painel-administrador');
  } */

  registrar() {
    this.nav.navigateForward('add-edit-administrador');
  }


  ngOnInit() {  }
  
}