import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditPedidoEntregaPage } from './add-edit-pedido-entrega.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditPedidoEntregaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditPedidoEntregaPageRoutingModule {}
