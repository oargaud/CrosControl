import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ControlService } from './control.service'
import { ControlDto } from '../model/control-model'

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {


  listControl:ControlDto[] = [];

  constructor(private http: HttpClient,private controlService: ControlService) { }

  ngOnInit(): void {

    this.controlService.getControls().subscribe(
      (controls)=>{
        this.listControl = controls;
      }
    )
  }

}
