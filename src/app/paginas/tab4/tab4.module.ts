import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Tab4Page } from './tab4.page';
import { CommonModule } from '@angular/common';
import { Tab4PageRoutingModule } from './tab4-routing.module';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    IonicModule,
    Tab4PageRoutingModule
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
