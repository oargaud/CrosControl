import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { HttpParams, HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { BdDto, ArtistDto, EditionDto, SagaDto, StatutPossessionDto } from '../../model/model'

import { BdService } from '../bd.service';

@Component({
  selector: 'app-bd-form',
  templateUrl: './bd-form.component.html',
  styleUrls: ['./bd-form.component.scss']
})
export class BdFormComponent implements OnInit {

  @ViewChild('file') fileInput: any;

  bd:BdDto = new BdDto();
  selectedFile: File;
  url: any;


  listSaga: SagaDto[] = [];

  listEdition: EditionDto[] = [];

  listArtist: ArtistDto[] = [];

  listStatutPossession: StatutPossessionDto[] = [];

  bdForm ;

  editionSelected: EditionDto;
  sagaSelected: SagaDto;

  public options2: any ;
  public selected2: any;


//       ,
//     photo: new FormControl(null)


  constructor(public bdService:BdService,
    private fb: FormBuilder,
    public http: HttpClient,
    public dialog: MatDialogRef<BdFormComponent>,
    @Inject(MAT_DIALOG_DATA)bd:BdDto
    ) {

      this.bd = bd;

      this.bdForm = this.fb.group({
        title: [this.bd.title, Validators.required],
        tome: [this.bd.tome],
        saga: [''],
        edition:[''],
        scenaristes:this.fb.array([ this.fb.control('')  ]),
        illustrateurs:this.fb.array([ this.fb.control('')  ]),
        statutPossession:['']
      });



  }

  ngOnInit(): void {

     this.bdService.getSagas().subscribe(
       (reponse) => {this.listSaga = reponse}
     );

     this.bdService.getEditions().subscribe(
       (reponse) => this.listEdition = reponse
     );

     this.bdService.getArtistes().subscribe(
       (reponse) => this.listArtist = reponse
     );

     this.bdService.getStatutPossession().subscribe(
       (reponse) => this.listStatutPossession = reponse
     );

    this.options2 = [
      {"id": 1, "name": "a"},
      {"id": 2, "name": "b"}
    ]
    this.selected2 = this.options2[1].id;


   }

  ngAfterContentInit(){
    let editionSelect = document.getElementById('edition');

    console.log(editionSelect);
    this.editionSelected = this.bd.edition;
    this.sagaSelected = this.bd.saga;

//     this.selectedFile = this.bd.photos[0].photo;
//     var reader = new FileReader();
//     reader.readAsDataURL(this.selectedFile); // read file as data url
//
//     reader.onload = (event) => { // called once readAsDataURL is completed
//       this.url = event.target!.result;
//     }

     this.url = 'data:image/jpeg;base64,' + this.bd.photos[0].photo;
  }


   //Gets called when the user selects an image
  onFileChanged(event:any) {
     //Select File
     this.selectedFile = event.target.files[0];

     var reader = new FileReader();
     reader.readAsDataURL(event.target.files[0]); // read file as data url

     reader.onload = (event) => { // called once readAsDataURL is completed
           this.url = event.target!.result;
     }


  }

  supprimerFichier(){
    this.fileInput.nativeElement.value = null;
    this.url = null;
  }

  creerArtiste(){

  }

  validForm(){

    let newBd = new BdDto(this.bdForm.value);
    const formData = new FormData();
    formData.append("photo", this.selectedFile);
    formData.append("bd", JSON.stringify(newBd));

    this.http.post("http://localhost:8080/bd/create", formData).subscribe()

  }


  get scenaristes() {
    return this.bdForm.get('scenaristes') as FormArray;
  }

  addScenariste() {
    this.scenaristes.push(this.fb.control(''));
  }

  removeScenariste(index:number){
     this.scenaristes.removeAt(index);
  }


  get illustrateurs() {
    return this.bdForm.get('illustrateurs') as FormArray;
  }

  addIllustrateur() {
    this.illustrateurs.push(this.fb.control(''));
  }

  removeIllustrateur(index:number){
     this.illustrateurs.removeAt(index);
  }

}
