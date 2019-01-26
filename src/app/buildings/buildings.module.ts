import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildingsRoutingModule } from './buildings-routing.module';
import { BuildingComponent } from './components/building.component';

@NgModule({
  declarations: [BuildingComponent],
  imports: [
    CommonModule,
    BuildingsRoutingModule
  ]
})
export class BuildingsModule { }
