import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelMotoristaPage } from './sel-motorista.page';

const routes: Routes = [
  {
    path: '',
    component: SelMotoristaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelMotoristaPageRoutingModule {}
