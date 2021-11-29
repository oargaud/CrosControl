import { Component, OnInit,Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Commande } from '../commande'
import { CommandeService } from '../commande.service'
// import { ControlComponent } from '../control/control.component'

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
  }

  @Input() commande: Commande = { id:0,name:"test",status:false} ;

//   public update(name: string){
//     console.info("appel a la fonction");
//
//     console.info(name);
//     this.commandeService.updateCommande(name);
//   }


//    public update(){
// //       this.commandeService.updateCommande(name);
//     }


  public update(commande: Commande){
    console.info("appel a la fonction");

    console.info(commande);
    this.commandeService.updateCommande(commande).subscribe(
       (response: Commande) => {
         console.log(response);
//          this.commandeService.getCommandes().subscribe();
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
       }
     );
  }



//   public onUpdateEmloyee(employee: Employee): void {
//     this.employeeService.updateEmployee(employee).subscribe(
//       (response: Employee) => {
//         console.log(response);
//         this.getEmployees();
//       },
//       (error: HttpErrorResponse) => {
//         alert(error.message);
//       }
//     );
//   }




  public test(){
  console.info("appel a la fonction test");
  }
}
