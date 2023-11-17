import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, IonDatetime, NavController, PickerController } from '@ionic/angular';
import { ClienteService } from 'src/app/services/domain/cliente.service';
import { MotoristaService } from 'src/app/services/domain/motorista.service';
import { PedidoEntregaService } from 'src/app/services/domain/pedidoEntrega.service';
import { VeiculoService } from 'src/app/services/domain/veiculo.service';

@Component({
  selector: 'app-add-edit-pedido-entrega',
  templateUrl: './add-edit-pedido-entrega.page.html',
  styleUrls: ['./add-edit-pedido-entrega.page.scss'],
})
export class AddEditPedidoEntregaPage implements OnInit {
  public modoDeEdicao = false;

  pedidoEntregaForm!: FormGroup;
  clientes: any[] = [];
  veiculos: any[] = [];

  dataEntregaControl = new FormControl();
  isCalendarOpen = false;

  constructor(private formBuilder: FormBuilder,
    private alertController: AlertController,
    private navController: NavController,
    private route: ActivatedRoute,
    public pedidoEntregaService: PedidoEntregaService,
    public clienteService: ClienteService,
    public veiculoService: VeiculoService,
    ) { }

    submit() {
      console.log('Form Value:', this.pedidoEntregaForm.value);
    
      if (!this.modoDeEdicao) {
        const payload = this.pedidoEntregaForm.value;
        console.log('Payload for Insert:', payload);
    
        this.pedidoEntregaService.insert(payload).subscribe(response => {
          this.presentAlert('Sucesso', 'O pedido foi salvo com sucesso', ['Ok']);
        });
      }
    
      if (this.modoDeEdicao) {
        const payload =this.pedidoEntregaForm.value;
        console.log('Payload for Update:', payload);
    
        this.pedidoEntregaService.update(payload).subscribe(response => {
          this.presentAlert('Sucesso', 'O pedido foi atualizado com sucesso', ['Ok']);
        });
      }
    }
    


  ngOnInit() {
    this.loadClientes()
    this.loadVeiculos()

    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    if (id > 0) {
      this.modoDeEdicao = true;
      this.pedidoEntregaService.findById(id).subscribe(response => {
        this.pedidoEntregaForm = this.formBuilder.group({
          id: [response.id],
          mercadoria: [response.mercadoria, Validators.required],
          origem: [response.origem, Validators.required],
          destino: [response.destino, Validators.required],
          emissao: [new Date(response.emissao), Validators.required],
          dataEntrega: [new Date(response.dataEntrega), Validators.required],
          statusPedido: [response.statusPedido, Validators.required],
          clienteId: [response.cliente ? response.cliente.id : null, Validators.required],
          veiculoId: [response.veiculo ? response.veiculo.id : null, Validators.required],
        });
      });
    } else {
      this.modoDeEdicao = false;
      this.pedidoEntregaForm = this.formBuilder.group({
        id,
        mercadoria: ['', Validators.required],
        origem: ['', Validators.required],
        destino: ['', Validators.required],
        emissao: [new Date(), Validators.required],
        dataEntrega: [new Date(), Validators.required],
        statusPedido: ['', Validators.required],
        clienteId: ['', Validators.required],
        veiculoId: ['', Validators.required],
      });
    }
  }

  loadClientes() {
    this.clienteService.findAll().subscribe(
      (data: any[]) => {
        // Assumindo que a estrutura dos clientes seja uma lista de objetos
        // Aqui você pode ajustar conforme a estrutura real dos seus dados
        this.clientes = data;
      },
      (error: any) => {
        console.error('Erro ao buscar clientes', error);
      }
      );
    }
  
    loadVeiculos() {
      this.veiculoService.findAll().subscribe(
        (data: any[]) => {
          this.veiculos = data; // Supondo que a estrutura dos veiculos seja uma lista de objetos
        },
        (error: any) => { // Adicione um tipo explícito para o parâmetro 'error'
          console.error('Erro ao buscar veiculos', error);
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


  /*======================== EVENTOS ESPECIFICOS=============================== */

  openCalendar() {
    this.isCalendarOpen = true;
  }

  closeCalendar() {
    this.isCalendarOpen = false;
  }

  toggleCalendar() {
    this.isCalendarOpen = !this.isCalendarOpen;
  }
  
}
