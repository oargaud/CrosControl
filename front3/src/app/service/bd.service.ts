import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BdDto, ArtistDto , EditionDto , SagaDto } from '../model/model'


@Injectable({
  providedIn: 'root'
})
export class BdService {


//   webSocket: WebSocket;
  listSaga: SagaDto[] = [];

  apiUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }




//   addBd(bd: BdDto): Observable<BdDto> {
//     return this.http.post<BdDto>(this.apiUrl+"/bd/create", bd)
//       .pipe(
// //         catchError(this.handleError('addHero', hero))
//       );
//   }
//
    addBd(data: FormData): Observable<BdDto> {
      return this.http.post<BdDto>(this.apiUrl+"/bd/create", data)
        .pipe(
  //         catchError(this.handleError('addHero', hero))
        );
    }



  delBd(id: number):Observable<unknown> {
    return this.http.delete(this.apiUrl+"/bd/del/"+id).pipe();
  }

  getBds(): Observable<BdDto[]> {
    return this.http.get<BdDto[]>(this.apiUrl+"/bd/all")
      .pipe(
//         catchError(this.handleError('addHero', hero))
      );
  }

  getBd(id:number): Observable<BdDto> {
    return this.http.get<BdDto>(this.apiUrl+"/bd/"+id)
      .pipe(
      //         catchError(this.handleError('addHero', hero))
      );
  }




  addSaga(saga: SagaDto): Observable<SagaDto> {
    return this.http.post<SagaDto>(this.apiUrl+"/saga/create", saga)
      .pipe(
//         catchError(this.handleError('addHero', hero))
      );
  }

  getSagas(): Observable<SagaDto[]> {
    return this.http.get<SagaDto[]>(this.apiUrl+"/saga/all")
      .pipe(
//         catchError(this.handleError('addHero', hero))
      );
  }





  addArtist(artist: ArtistDto): Observable<ArtistDto> {
    return this.http.post<ArtistDto>(this.apiUrl+"/artiste/create", artist)
      .pipe(
//         catchError(this.handleError('addHero', hero))
      );
  }

  getArtistes(): Observable<ArtistDto[]> {
    return this.http.get<ArtistDto[]>(this.apiUrl+"/artiste/all")
      .pipe(
//         catchError(this.handleError('addHero', hero))
      );
  }




  addEdition(edition: EditionDto): Observable<EditionDto> {
    return this.http.post<EditionDto>(this.apiUrl+"/edition/create", edition)
      .pipe(
//         catchError(this.handleError('addHero', hero))
      );
  }

  getEditions(): Observable<EditionDto[]> {
    return this.http.get<EditionDto[]>(this.apiUrl+"/edition/all")
      .pipe(
//         catchError(this.handleError('addHero', hero))
      );
  }















//   public openWebSocket(){
//     this.webSocket = new WebSocket('ws://localhost:8080/croswebsocket');
//
//     this.webSocket.onopen = (event) => {
//       console.log('Open: ', event);
//     };
//
//     this.webSocket.onmessage = (event) => {
//       const sagaDto = JSON.parse(event.data);
//       this.listSaga.push(sagaDto);
//     };
//
//     this.webSocket.onclose = (event) => {
//       console.log('Close: ', event);
//     };
//   }
//
//   public sendMessage(sagaDto: SagaDto){
//     this.webSocket.send(JSON.stringify(sagaDto));
//   }
//
//   public closeWebSocket() {
//     this.webSocket.close();
//   }










}
