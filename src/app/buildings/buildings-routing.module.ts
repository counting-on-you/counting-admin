import { BuildingComponent } from './components/building/building.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [{
    path: ':name',
    component: BuildingComponent
},
{
    path: '',
    component: LandingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildingsRoutingModule { }
