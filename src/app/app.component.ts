import { Component } from '@angular/core';
import { AdministradorService } from './services/domain/administrador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  administradorDTO: any;
  

  constructor(private administradorService: AdministradorService,
    private router: Router) {}

  signOut() {
    // Adicione lógica adicional de logout se necessário

    // Navegue para a página de login
    this.router.navigate(['login']);
  }

  ngOnInit() {
    const adminId = 1;
  
    this.administradorService.findById(adminId).subscribe(
      (administrador: any) => {
        this.administradorDTO = administrador;
      },
      (error) => {
        console.error('Erro ao obter dados do administrador:', error);
        alert('Erro ao obter dados do administrador');
      }
    );
  }
  
}