import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ClienteDTO } from 'src/app/models/ClienteDTO';
import { ClienteService } from 'src/app/services/domain/cliente.service';

@Component({
  selector: 'app-sel-cliente',
  templateUrl: './sel-cliente.page.html',
  styleUrls: ['./sel-cliente.page.scss'],
})
export class SelClientePage implements OnInit {

  clientes!: ClienteDTO[];

  constructor(public clienteService: ClienteService,
              private navController: NavController) { }

  //findall().subscribe(res => {}, err => {})
  ionViewDidEnter(){
    this.clienteService.findAll()
                           .subscribe({
                              next: 
                                (response) => this.clientes = response,                              
                              error:
                                (error) => console.log(error)
                           });
  }

  addEditCliente(){
    this.navController.navigateForward('add-edit-cliente');
  }

  excluirCliente(id: number){
    this.clienteService.delete(id)
                           .subscribe({
                              next: 
                                (response) => window.location.reload(),                              
                              error:
                                (error) => console.log(error)
                           });
  }

  ngOnInit() {
  }

}
