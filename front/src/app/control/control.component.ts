import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Commande } from '../commande';
import { CommandeService } from '../commande.service'

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  public commandes: Commande[] = [];

//   constructor() { }
  constructor(private commandeService: CommandeService) { }



  ngOnInit(): void {
     this.actualiseCommande();
  }


  public actualiseCommande():void{

  this.commandes = this.commandeService.getCommandes();



//     this.commandeService.getCommandes().subscribe(
//      (response: Commande[]) => {
// //             this.commandeService.commande = response;
// //              this.commandes = this.commandeService.commande ;
//             this.commandes = response;
//           },
//           (error:HttpErrorResponse) => {
//             alert(error.message);
//           }
//      );

  }
}
