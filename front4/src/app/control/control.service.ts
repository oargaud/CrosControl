

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { ControlDto } from '../model/control-model'


@Injectable({
  providedIn: 'root'
})
export class ControlService {

  listControl: ControlDto[] = [];

//   apiUrl: string = "http://localhost:8080";
  apiUrl: string = "http://93.9.238.159:8080";

  constructor(private http: HttpClient) { }

  getControls(): Observable<ControlDto[]> {
    return this.http.get<ControlDto[]>(this.apiUrl+"/commandeesp/all").pipe();
  }

  getControl(id:number): Observable<ControlDto> {
    return this.http.get<ControlDto>(this.apiUrl+"/commandeesp/"+id).pipe();
  }

  toggleControl(id:number): Observable<ControlDto>{
    return this.http.put<ControlDto>(this.apiUrl+"/commandeesp/"+id,"").pipe();
  }

}
