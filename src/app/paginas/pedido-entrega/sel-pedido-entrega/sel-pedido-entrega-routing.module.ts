import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelPedidoEntregaPage } from './sel-pedido-entrega.page';

const routes: Routes = [
  {
    path: '',
    component: SelPedidoEntregaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelPedidoEntregaPageRoutingModule {}
