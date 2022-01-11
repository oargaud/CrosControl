import { Component, OnInit } from '@angular/core';
import { ArtistDto , EditionDto , SagaDto } from '../../model/model';
import { BdService } from '../../service/bd.service';


import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss']
})
export class ArtistFormComponent implements OnInit {

   artistForm = this.fb.group({
      lastname: ['', Validators.required],
      firstname: [''],
    });


  constructor(private bdService: BdService, private fb: FormBuilder) { }


  ngOnInit(): void {
  }


    validForm(){
      this.bdService.addArtist(this.artistForm.value).subscribe();
      this.artistForm.reset();
    }

}
