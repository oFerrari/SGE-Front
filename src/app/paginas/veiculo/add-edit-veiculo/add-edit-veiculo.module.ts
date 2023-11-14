import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditVeiculoPageRoutingModule } from './add-edit-veiculo-routing.module';

import { AddEditVeiculoPage } from './add-edit-veiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddEditVeiculoPageRoutingModule
  ],
  declarations: [AddEditVeiculoPage]
})
export class AddEditVeiculoPageModule {}
