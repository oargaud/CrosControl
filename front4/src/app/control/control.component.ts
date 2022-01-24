import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ControlService } from './control.service'
import { ControlDto } from '../model/control-model'



import { ControlWebsocketService } from '../service/control.websocket.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {


  listControl:ControlDto[] = [];

  constructor(private http: HttpClient,private controlService: ControlService,private controlWebsocketService: ControlWebsocketService) { }

  ngOnInit(): void {
    this.refershControl();
     this.initControlWebSocket();
  }

  refershControl(){
    this.controlService.getControls().subscribe(
        (controls)=>{
          this.listControl = controls;
        }
      )
  }

  initControlWebSocket = () => {
    const obs = this.controlWebsocketService.getObservable();

    obs.subscribe({
      next: this.onNewControlMsg,
      error: err => {
        console.log(err);
      }
    });
  }


  onNewControlMsg = receivedMsg => {
    if (receivedMsg.type === 'SUCCESS') {
//       this.progress = receivedMsg.message;
    this.refershControl();
    }
  }

}
