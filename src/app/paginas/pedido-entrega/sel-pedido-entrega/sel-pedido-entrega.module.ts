import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelPedidoEntregaPageRoutingModule } from './sel-pedido-entrega-routing.module';

import { SelPedidoEntregaPage } from './sel-pedido-entrega.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelPedidoEntregaPageRoutingModule
  ],
  declarations: [SelPedidoEntregaPage]
})
export class SelPedidoEntregaPageModule {}
