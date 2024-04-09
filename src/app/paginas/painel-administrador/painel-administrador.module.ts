import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PainelAdministradorPageRoutingModule } from './painel-administrador-routing.module';

import { PainelAdministradorPage } from './painel-administrador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PainelAdministradorPageRoutingModule
  ],
  declarations: [PainelAdministradorPage]
})
export class PainelAdministradorPageModule {}
