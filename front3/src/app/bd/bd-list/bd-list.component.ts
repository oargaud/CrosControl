import { Component, OnInit, Inject } from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { BdDto, ArtistDto , EditionDto , SagaDto ,PhotoDto  } from '../../model/model'
import { BdService } from '../../service/bd.service'
import { BdFormComponent } from '../bd-form/bd-form.component'


@Component({
  selector: 'app-bd-list',
  templateUrl: './bd-list.component.html',
  styleUrls: ['./bd-list.component.scss']
})
export class BdListComponent implements OnInit {

  listSaga: SagaDto[] = [
//                             { "name": "Lanfeust de Troy" },
//                             { "name": "Trol de Troy" },
//                             { "name": "Cixi de Troy" },
//                             { "name": "Requiem" },
//                             { "name": "Elfes" },
//                             { "name": "Nains" },
//                             { "name": "Chroniques de la lune noir" }
                        ];

  listBd: BdDto[] = [];


  constructor(private bdService: BdService, private dialog: MatDialog) { }

  ngOnInit(): void {

//     this.bdService.getSagas().subscribe(
//       (sagas) => {
//           this.listSaga = sagas;
//         }
//     );

    this.bdService.getBds().subscribe(
      (bds) => {
          this.listBd = bds;
        }
    );

  }


  supprimer(id: number){
    this.bdService.delBd(id).subscribe();
  }

  openFormBd(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
//     let lastname = "";
//     let firstname = "";
//     dialogConfig.data = { lastname , firstname };

    this.dialog.open(BdFormComponent, dialogConfig);
  }


}
