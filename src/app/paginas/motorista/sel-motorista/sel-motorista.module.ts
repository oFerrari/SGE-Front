import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelMotoristaPageRoutingModule } from './sel-motorista-routing.module';

import { SelMotoristaPage } from './sel-motorista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelMotoristaPageRoutingModule
  ],
  declarations: [SelMotoristaPage]
})
export class SelMotoristaPageModule {}
