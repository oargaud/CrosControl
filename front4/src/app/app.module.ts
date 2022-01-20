import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from '../material.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { RxStompService } from '@stomp/ng2-stompjs'
import { ProgressWebsocketService } from './service/progress.websocket.service';

import { HomeComponent } from './home/home.component';
import { ControlComponent } from './control/control.component';
import { BdComponent } from './bd/bd.component';
import { BdCardComponent } from './bd/bd-card/bd-card.component';
import { BdFormComponent } from './bd/bd-form/bd-form.component';
import { BdTableComponent } from './bd/bd-table/bd-table.component';
import { BdListeComponent } from './bd/bd-liste/bd-liste.component';
import { BdDetailComponent } from './bd/bd-detail/bd-detail.component';
import { ControlCardComponent } from './control/control-card/control-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ControlComponent,
    BdComponent,
    BdCardComponent,
    BdFormComponent,
    BdTableComponent,
    BdListeComponent,
    BdDetailComponent,
    ControlCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    RxStompService,
    ProgressWebsocketService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
