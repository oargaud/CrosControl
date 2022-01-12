import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { HttpParams, HttpClient } from '@angular/common/http';

import { BdDto, ArtistDto, EditionDto, SagaDto, StatutPossessionDto } from '../../model/model'

import { BdService } from '../../service/bd.service';


@Component({
  selector: 'app-bd-form',
  templateUrl: './bd-form.component.html',
  styleUrls: ['./bd-form.component.scss']
})
export class BdFormComponent implements OnInit {

  test: string = "test";
  selectedFile: File;
  url: any;
//   retrievedImage: any;
//   base64Data: any;
//   retrieveResonse: any;
//   message: string;
//   imageName: any;






  listSaga: SagaDto[] = [
//     { "name": "Lanfeust de Troy" },
//     { "name": "Trol de Troy" },
//     { "name": "Cixi de Troy" },
//     { "name": "Requiem" },
//     { "name": "Elfes" },
//     { "name": "Nains" },
//     { "name": "Chroniques de la lune noir" }
  ];

  listEdition: EditionDto[] = [
//     { "name": "SOLEIL" },
//     { "name": "DARGAUD" }
  ];

  listArtist: ArtistDto[] = [
//     { "lastname": "ARLESTON", "firstname":"toto" },
//     { "lastname": "TARQUIN", "firstname":"titi"}
  ];

  listStatutPossession: StatutPossessionDto[] = [
//     { "lastname": "ARLESTON", "firstname":"toto" },
//     { "lastname": "TARQUIN", "firstname":"titi"}
  ];


  bdForm = this.fb.group({
    title: ['', Validators.required],
    tome: [''],
    saga: [''],
    edition:[''],
    scenaristes:this.fb.array([
      this.fb.control('')
    ]),
    illustrateurs:this.fb.array([
        this.fb.control('')
      ])
//       ,
//     photo: new FormControl(null)
  });

  constructor(public bdService:BdService, private fb: FormBuilder, public http: HttpClient) {


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

  }


//Gets called when the user selects an image
  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => { // called once readAsDataURL is completed
          this.url = event.target!.result;
    }

  }


  @ViewChild('file') fileInput: any;

  supprimerFichier(){
    this.fileInput.nativeElement.value = null;
    this.url = null;
  }



  validForm(){
//   if (this.bdForm.invalid) {
//           return;
//       }

      // display form values on success
  //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.editionform.value, null, 4));

//       console.log(this.bdForm.value);
      let newBd = new BdDto(this.bdForm.value);
//       newBd.photo = this.selectedFile;


//   const params = new HttpParams()
//      .set('photo', this.selectedFile)
//      .set('bd', JSON.stringify(newBd));

    const formData = new FormData();

    formData.append("photo", this.selectedFile);
    formData.append("bd", JSON.stringify(newBd));


  this.http.post("http://localhost:8080/bd/create", formData).subscribe(
//       (response) => console.log(response),
//       (error) => console.log(error)
    )


//       this.bdService.addBd(this.bdForm.value).subscribe();
//     this.bdService.addBd(formData).subscribe();

  }

//   handleFileInput(files: FileList) {
//       this.fileToUpload = files.item(0);
//   }

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
