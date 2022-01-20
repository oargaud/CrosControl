import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { BdDto } from '../../model/bd-model'
import { BdService } from '../bd.service';
import { BdFormComponent } from '../bd-form/bd-form.component'

@Component({
  selector: 'app-bd-detail',
  templateUrl: './bd-detail.component.html',
  styleUrls: ['./bd-detail.component.scss']
})
export class BdDetailComponent implements OnInit {

    bd: BdDto ;
    retrievedImage: any;

   constructor(
     private route: ActivatedRoute,
     private bdService: BdService,
     private location: Location,
     private dialog: MatDialog
   ) {}



   ngOnInit(): void {
     this.getBd();
   }



   getBd():void{

     const id = Number(this.route.snapshot.paramMap.get('id'));

     this.bdService.getBd(id).subscribe(
       bd => {
         this.bd = bd;
         this.retrievedImage = 'data:image/jpeg;base64,' + bd.photos;
       }
     );
   }


//    editBd(){
//      let dialogRef = this.dialog.open(ArtistFormComponent, {
//        height: '400px',
//        width: '600px',
//      });
//
//    }



  editBd(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    let title = this.bd.title;

    dialogConfig.data = this.bd;

    this.dialog.open(BdFormComponent, dialogConfig);
  }


}
