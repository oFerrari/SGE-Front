import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditMotoristaPage } from './add-edit-motorista.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditMotoristaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditMotoristaPageRoutingModule {}
