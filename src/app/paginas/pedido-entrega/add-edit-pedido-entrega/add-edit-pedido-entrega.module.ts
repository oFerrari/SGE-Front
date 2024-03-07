import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditPedidoEntregaPageRoutingModule } from './add-edit-pedido-entrega-routing.module';

import { AddEditPedidoEntregaPage } from './add-edit-pedido-entrega.page';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddEditPedidoEntregaPageRoutingModule
  ],
  declarations: [AddEditPedidoEntregaPage]
})
export class AddEditPedidoEntregaPageModule {}
