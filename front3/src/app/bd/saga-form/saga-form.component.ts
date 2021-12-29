import { Component, OnInit } from '@angular/core';
import { ArtistDto , EditionDto , SagaDto } from '../../model/model'
import { BdService } from '../../service/bd.service'

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-saga-form',
  templateUrl: './saga-form.component.html',
  styleUrls: ['./saga-form.component.scss']
})
export class SagaFormComponent implements OnInit {

  sagaForm = this.fb.group({
    name: ['', Validators.required],
  });


  constructor(private bdService: BdService, private fb: FormBuilder) { }


  ngOnInit(): void {
  }


  validForm(){
    this.bdService.addSaga(this.sagaForm.value).subscribe();
    this.sagaForm.reset();
  }

}
