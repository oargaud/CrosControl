import { Component, OnInit, Input } from '@angular/core';
import { BdDto } from '../../model/bd-model'

@Component({
  selector: 'app-bd-card',
  templateUrl: './bd-card.component.html',
  styleUrls: ['./bd-card.component.scss']
})
export class BdCardComponent implements OnInit {

  @Input() bd:BdDto;

  statut:string = "vas savoir";
  couleur:string = "blue";

  constructor() { }

  ngOnInit(): void {

    if(this.bd.statutPossession){
      switch (this.bd.statutPossession.statut){

        case "ACQUIS": {
          this.couleur = "green";
          this.statut = "yah bon"
          break;
        }

        case "NON ACQUIS": {
          this.couleur = "red";
          this.statut = "yah pas bon"
          break;
        }

        default: {
          this.couleur = "yellow";
          this.statut = "yah peut etre bon"
        }

      }
    }



  }

}
