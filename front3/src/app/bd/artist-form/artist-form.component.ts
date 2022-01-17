import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { ArtistDto , EditionDto , SagaDto } from '../../model/model';
import { BdService } from '../../service/bd.service';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss']
})
export class ArtistFormComponent implements OnInit {

//    artistForm = this.fb.group({
//       lastname: [this.artist.lastname, Validators.required],
//       firstname: ['toto'],
//     });
  artistForm : FormGroup;

  constructor(
    private bdService: BdService,
    private fb: FormBuilder,
    public dialog: MatDialogRef<ArtistFormComponent>,
    @Inject(MAT_DIALOG_DATA)artist:ArtistDto
  ) {

    this.artistForm = this.fb.group({
      lastname: [artist.lastname, Validators.required],
      firstname: [artist.firstname],
    });


  }



  ngOnInit(): void {
  }


  validForm(){
    this.bdService.addArtist(this.artistForm.value).subscribe();
    this.artistForm.reset();
  }



  closeModal(){
    this.dialog.close();
  }


}
