import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ControlComponent } from './control/control.component';
import { HomeComponent } from './home/home.component';
import { BdComponent } from './bd/bd.component';
import { ChatComponent } from './chat/chat.component';
import { PhotoComponent } from './photo/photo.component';
import { BdDetailComponent } from './bd/bd-detail/bd-detail.component';


const routes: Routes = [
{ path: '', component: HomeComponent},
{ path: 'home', component: HomeComponent},
{ path: 'control', component: ControlComponent},
{ path: 'bd', component: BdComponent},
{ path: 'chat', component: ChatComponent},
{ path: 'photo', component: PhotoComponent},
{ path: 'detail/:id', component: BdDetailComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
