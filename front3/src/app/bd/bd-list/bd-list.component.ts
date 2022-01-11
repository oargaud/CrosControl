import { Component, OnInit } from '@angular/core';
import { BdDto, ArtistDto , EditionDto , SagaDto } from '../../model/model'

import { BdService } from '../../service/bd.service'


@Component({
  selector: 'app-bd-list',
  templateUrl: './bd-list.component.html',
  styleUrls: ['./bd-list.component.scss']
})
export class BdListComponent implements OnInit {

  listSaga: SagaDto[] = [
                            { "name": "Lanfeust de Troy" },
                            { "name": "Trol de Troy" },
                            { "name": "Cixi de Troy" },
                            { "name": "Requiem" },
                            { "name": "Elfes" },
                            { "name": "Nains" },
                            { "name": "Chroniques de la lune noir" }
                        ];

  listBd: BdDto[] = [];


  constructor(private bdService: BdService) { }

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




}
