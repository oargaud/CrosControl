import { Component, OnInit } from '@angular/core';
import { ArtistDto , EditionDto , SagaDto } from '../../model/model';
import { BdService } from '../../service/bd.service';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-edition-form',
  templateUrl: './edition-form.component.html',
  styleUrls: ['./edition-form.component.scss']
})
export class EditionFormComponent implements OnInit {


  editionForm = this.fb.group({
    name: ['', Validators.required],
  });


  constructor(private bdService: BdService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  validForm(){
    this.bdService.addEdition(this.editionForm.value).subscribe();
    this.editionForm.reset();
  }

}
