import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ArtistDto , EditionDto , SagaDto } from '../model/model'


@Injectable({
  providedIn: 'root'
})
export class BdService {


//   webSocket: WebSocket;
  listSaga: SagaDto[] = [];

  apiUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }




  addSaga(saga: SagaDto): Observable<SagaDto> {
    return this.http.post<SagaDto>(this.apiUrl+"/saga/create", saga)
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
//       const chatMessageDto = JSON.parse(event.data);
//       this.chatMessages.push(chatMessageDto);
//     };
//
//     this.webSocket.onclose = (event) => {
//       console.log('Close: ', event);
//     };
//   }
//
//   public sendMessage(chatMessageDto: ChatMessageDto){
//     this.webSocket.send(JSON.stringify(chatMessageDto));
//   }
//
//   public closeWebSocket() {
//     this.webSocket.close();
//   }

















}
