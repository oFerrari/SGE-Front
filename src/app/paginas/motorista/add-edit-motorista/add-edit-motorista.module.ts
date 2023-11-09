import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditMotoristaPageRoutingModule } from './add-edit-motorista-routing.module';

import { AddEditMotoristaPage } from './add-edit-motorista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEditMotoristaPageRoutingModule
  ],
  declarations: [AddEditMotoristaPage]
})
export class AddEditMotoristaPageModule {}
