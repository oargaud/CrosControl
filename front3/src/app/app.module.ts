import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BdComponent } from './bd/bd.component';
import { ControlComponent } from './control/control.component';
import { HomeComponent } from './home/home.component';
import { ArtistFormComponent } from './bd/artist-form/artist-form.component';
import { BdFormComponent } from './bd/bd-form/bd-form.component';
import { SagaFormComponent } from './bd/saga-form/saga-form.component';
import { EditionFormComponent } from './bd/edition-form/edition-form.component';
import { BdListComponent } from './bd/bd-list/bd-list.component';
import { ChatComponent } from './chat/chat.component';
import { PhotoComponent } from './photo/photo.component';
import { BdDetailComponent } from './bd/bd-detail/bd-detail.component';
import { GestionArtistesComponent } from './bd/gestion-artistes/gestion-artistes.component';
import { BdHeaderComponent } from './bd/bd-header/bd-header.component';
import { BdCardComponent } from './bd/bd-card/bd-card.component';
import { StatutFormComponent } from './bd/statut-form/statut-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BdComponent,
    ControlComponent,
    HomeComponent,
    ArtistFormComponent,
    BdFormComponent,
    SagaFormComponent,
    EditionFormComponent,
    BdListComponent,
    ChatComponent,
    PhotoComponent,
    BdDetailComponent,
    GestionArtistesComponent,
    BdHeaderComponent,
    BdCardComponent,
    StatutFormComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
