import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildingsRoutingModule } from './buildings-routing.module';
import { BuildingComponent } from './components/building/building.component';
import { LandingComponent } from './components/landing/landing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BuildingComponent, LandingComponent],
  imports: [
    CommonModule,
    BuildingsRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class BuildingsModule { }
