import { Component, OnInit } from '@angular/core';

import { BdDto } from '../../model/model'
import { BdService } from '../bd.service'

@Component({
  selector: 'app-bd-liste',
  templateUrl: './bd-liste.component.html',
  styleUrls: ['./bd-liste.component.scss']
})
export class BdListeComponent implements OnInit {


  bds: BdDto[] = [];

  constructor( private bdService: BdService ) { }

  ngOnInit(): void {
    this.bdService.getBds().subscribe(
          (bds) => {
              this.bds = bds;
            }
        );
  }

}
