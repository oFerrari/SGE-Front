import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditVeiculoPage } from './add-edit-veiculo.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditVeiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditVeiculoPageRoutingModule {}
