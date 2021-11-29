import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commande } from './commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private apiServiceUrl = environment.apiBaseUrl;
  public commandes: Commande[] = [];


  constructor(private http: HttpClient) { }

  public getCommande(name: string): Observable<Commande> {
    return this.http.get<Commande>(`${this.apiServiceUrl}/commandeesp/${name}`);
  }

   public updateCommande(commande: Commande): Observable<Commande> {
     return this.http.put<Commande>(`${this.apiServiceUrl}/commandeesp/${commande.name}`,commande)
     ;
   }

//    public getCommandes(): Observable<Commande[]> {
//      return this.http.get<Commande[]>(`${this.apiServiceUrl}/commandeesp/all`);
//    }


  public getCommandes(): Commande[] {
      this.http.get<Commande[]>(`${this.apiServiceUrl}/commandeesp/all`).subscribe(
       (response: Commande[]) => {  this.commandes = response;   },
              (error:HttpErrorResponse) => {  alert(error.message);  }
      );
//      toto : Commande[] = [];
     return this.commandes;
   }



//    public updateCommande(name:string): Observable<Commande> {
//       console.info("appel au service");
//      return this.http.put<Commande>(`${this.apiServiceUrl}/commandeesp/${name}`,name);
//    }

}
