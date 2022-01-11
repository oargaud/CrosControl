import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

//  signup = new FormGroup({
//     email: new FormControl(null, Validators.required),
//     image: new FormControl(null, [Validators.required, requiredFileType('png')])
//   });


  constructor() { }

  ngOnInit(): void {
  }

}
