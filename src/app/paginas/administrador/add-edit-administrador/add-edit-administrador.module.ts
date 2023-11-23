import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditAdministradorPageRoutingModule } from './add-edit-administrador-routing.module';

import { AddEditAdministradorPage } from './add-edit-administrador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddEditAdministradorPageRoutingModule
  ],
  declarations: [AddEditAdministradorPage]
})
export class AddEditAdministradorPageModule {}
