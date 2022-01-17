import { Component, OnInit } from '@angular/core';
import { BdDto, ArtistDto , EditionDto , SagaDto, PhotoDto  } from '../../model/model';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ArtistFormComponent } from '../artist-form/artist-form.component'

import { BdService } from '../../service/bd.service'

@Component({
  selector: 'app-gestion-artistes',
  templateUrl: './gestion-artistes.component.html',
  styleUrls: ['./gestion-artistes.component.scss']
})
export class GestionArtistesComponent implements OnInit {


  listArtist: ArtistDto[] = [];


  constructor(private bdService: BdService, private dialog: MatDialog) { }

  ngOnInit(): void {

   this.bdService.getArtistes().subscribe(
        (artists) => {
            this.listArtist = artists;
          }
      );


  }




  ajoutArtiste(){

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    let lastname = "";
    let firstname = "";
    dialogConfig.data = { lastname , firstname };

    this.dialog.open(ArtistFormComponent, dialogConfig);

//     let dialogRef = this.dialog.open(ArtistFormComponent, {
//       width: 60%;
//     });

//      const dialogRef = this.dialog.open(ArtistFormComponent, {
//           width: '60%',
// //           data: {name: this.name, animal: this.animal},
//         });


//     let dialogRef = this.dialog.open(ArtistFormComponent, {
//     panelClass: 'my-class'
//     });

  }


  editArtist(artist: ArtistDto){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = artist;

    this.dialog.open(ArtistFormComponent, dialogConfig);
  }


  delArtist(id:number){
    this.bdService.delArtist(id).subscribe();
  }


}
