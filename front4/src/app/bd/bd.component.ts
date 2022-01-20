import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { BdDto, ArtistDto , EditionDto , SagaDto ,PhotoDto  } from '../model/model'
import { BdFormComponent } from './bd-form/bd-form.component'

@Component({
  selector: 'app-bd',
  templateUrl: './bd.component.html',
  styleUrls: ['./bd.component.scss']
})
export class BdComponent implements OnInit {

  vueListe:boolean = true;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }


  newBd(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
//     dialogConfig.disableClose = false;
//     dialogConfig.width ="100%";
//     let lastname = "";
//     let firstname = "";
//     dialogConfig.data = { lastname , firstname };

    this.dialog.open(BdFormComponent, dialogConfig);
  }



}
