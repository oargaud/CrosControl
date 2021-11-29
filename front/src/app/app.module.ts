import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BdComponent } from './bd/bd.component';
import { HomeComponent } from './home/home.component';
import { ControlComponent } from './control/control.component';
import { CommandeService } from './commande.service';
import { CommandeComponent } from './commande/commande.component';

@NgModule({
  declarations: [
    AppComponent,
    BdComponent,
    HomeComponent,
    ControlComponent,
    CommandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CommandeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
