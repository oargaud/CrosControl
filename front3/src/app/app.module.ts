import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BdComponent } from './bd/bd.component';
import { ControlComponent } from './control/control.component';
import { HomeComponent } from './home/home.component';
import { ArtistFormComponent } from './bd/artist-form/artist-form.component';
import { BdFormComponent } from './bd/bd-form/bd-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BdComponent,
    ControlComponent,
    HomeComponent,
    ArtistFormComponent,
    BdFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
