import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelClientePage } from './sel-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: SelClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelClientePageRoutingModule {}
