import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'building',
        loadChildren: './buildings/buildings.module#BuildingsModule'
      },
      { path: '',   redirectTo: '/building', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
