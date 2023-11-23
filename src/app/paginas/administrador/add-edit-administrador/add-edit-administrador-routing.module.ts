import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditAdministradorPage } from './add-edit-administrador.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditAdministradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditAdministradorPageRoutingModule {}
