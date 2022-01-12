import { Component, OnInit } from '@angular/core';
import { BdDto, ArtistDto , EditionDto , SagaDto, PhotoDto  } from '../../model/model';

import { BdService } from '../../service/bd.service'

@Component({
  selector: 'app-gestion-artistes',
  templateUrl: './gestion-artistes.component.html',
  styleUrls: ['./gestion-artistes.component.scss']
})
export class GestionArtistesComponent implements OnInit {


  listArtist: ArtistDto[] = [];


  constructor(private bdService: BdService) { }

  ngOnInit(): void {

   this.bdService.getArtistes().subscribe(
        (artists) => {
            this.listArtist = artists;
          }
      );


  }

}
