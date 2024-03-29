import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteService } from './services/domain/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { MotoristaService } from './services/domain/motorista.service';
import { VeiculoService } from './services/domain/veiculo.service';
import { PedidoEntregaService } from './services/domain/pedidoEntrega.service';
import { AdministradorService } from './services/domain/administrador.service';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, RouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ClienteService, MotoristaService, VeiculoService, PedidoEntregaService, AdministradorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
