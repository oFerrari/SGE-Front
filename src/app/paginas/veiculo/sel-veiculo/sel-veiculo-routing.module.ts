import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelVeiculoPage } from './sel-veiculo.page';

const routes: Routes = [
  {
    path: '',
    component: SelVeiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelVeiculoPageRoutingModule {}
