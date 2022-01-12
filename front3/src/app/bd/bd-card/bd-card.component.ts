import { Component, OnInit, Input } from '@angular/core';
import { BdDto, ArtistDto , EditionDto , SagaDto ,PhotoDto  } from '../../model/model'

@Component({
  selector: 'app-bd-card',
  templateUrl: './bd-card.component.html',
  styleUrls: ['./bd-card.component.scss']
})
export class BdCardComponent implements OnInit {

  @Input() bd : BdDto ;

  constructor() { }

  ngOnInit(): void {
  }

}
