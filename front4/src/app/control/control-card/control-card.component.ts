import { Component, OnInit, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ControlDto } from '../../model/control-model'
import { ControlService } from '../control.service'

@Component({
  selector: 'app-control-card',
  templateUrl: './control-card.component.html',
  styleUrls: ['./control-card.component.scss']
})
export class ControlCardComponent implements OnInit {

  @Input() control: ControlDto;

  constructor(private http: HttpClient,private controlService: ControlService) { }

  ngOnInit(): void {
  }


  toggle(id:number){
    this.controlService.toggleControl(id).subscribe();
  }


}
