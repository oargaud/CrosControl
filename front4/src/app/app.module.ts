import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';


import { HomeComponent } from './home/home.component';
import { ControlComponent } from './control/control.component';
import { BdComponent } from './bd/bd.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ControlComponent,
    BdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
