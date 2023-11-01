import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditClientePage } from './add-edit-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditClientePageRoutingModule {}
