import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PainelAdministradorPage } from './painel-administrador.page';

const routes: Routes = [
  {
    path: '',
    component: PainelAdministradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PainelAdministradorPageRoutingModule {}
