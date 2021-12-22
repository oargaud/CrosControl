import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ControlComponent } from './control/control.component';
import { HomeComponent } from './home/home.component';
import { BdComponent } from './bd/bd.component';



const routes: Routes = [
{ path: '', component: HomeComponent},
{ path: 'home', component: HomeComponent},
{ path: 'control', component: ControlComponent},
{ path: 'bd', component: BdComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
