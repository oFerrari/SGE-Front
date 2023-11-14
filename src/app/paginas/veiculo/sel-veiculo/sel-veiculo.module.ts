import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelVeiculoPageRoutingModule } from './sel-veiculo-routing.module';

import { SelVeiculoPage } from './sel-veiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelVeiculoPageRoutingModule
  ],
  declarations: [SelVeiculoPage]
})
export class SelVeiculoPageModule {}
