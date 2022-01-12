
import { Component, OnInit } from '@angular/core';
import { ArtistDto , EditionDto , SagaDto } from '../../model/model';
import { BdService } from '../../service/bd.service';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-statut-form',
  templateUrl: './statut-form.component.html',
  styleUrls: ['./statut-form.component.scss']
})
export class StatutFormComponent implements OnInit {

  statutForm = this.fb.group({
    statut: ['', Validators.required],
  });


  constructor(private bdService: BdService, private fb: FormBuilder) { }


  ngOnInit(): void {
  }


  validForm(){
    this.bdService.addStatutPossession(this.statutForm.value).subscribe();
    this.statutForm.reset();
  }

}
