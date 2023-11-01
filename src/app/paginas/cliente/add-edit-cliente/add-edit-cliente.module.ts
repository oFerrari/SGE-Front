import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditClientePageRoutingModule } from './add-edit-cliente-routing.module';

import { AddEditClientePage } from './add-edit-cliente.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddEditClientePageRoutingModule
  ],
  declarations: [AddEditClientePage]
})
export class AddEditClientePageModule {}
