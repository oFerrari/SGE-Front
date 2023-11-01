import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelClientePageRoutingModule } from './sel-cliente-routing.module';

import { SelClientePage } from './sel-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelClientePageRoutingModule
  ],
  declarations: [SelClientePage]
})
export class SelClientePageModule {}
