export class Model {
}

export class SagaDto{
//   name: string;
   constructor(
        public  name: string
      ) { }
}


export class EditionDto{
//   name: string;
   constructor(
      public  name: string
    ) { }
}

export class ArtistDto{
//   name: string;
   constructor(
      public  lastname: string,
      public  firstname: string
    ) { }
}


// export class BdDto{
// //   title: string;
// //   tome: string;
// //   saga: SagaDto;
// //   edition: EditionDto;
//
//   constructor(
//     public title: string,
//     public tome: string,
//     public saga: SagaDto,
//     public edition: EditionDto
//
//   ) { }
// }



export class BdDto{

  id: number;
  title: string;
  scenaristes: ArtistDto[];
  illustrateurs: ArtistDto[];
  edition: EditionDto;
  saga: SagaDto;
  tome: string;
  photos: PhotoDto[];

//   constructor(id: number,
//               title: string,
//               scenaristes: ArtistDto[],
//               illustrateurs: ArtistDto[],
//               edition: EditionDto,
//               saga: SagaDto,
//               tome: string,
//               photo: File)
//   {
//     this.id = id;
//     this.title = title;
//     this.scenaristes = scenaristes;
//     this.illustrateurs = illustrateurs;
//     this.edition = edition;
//     this.saga = saga;
//     this.tome = tome;
//     this.photo = photo;
//   }
   public constructor(init?: Partial<BdDto>) {
          Object.assign(this, init);
      }
}




export class PhotoDto{

  id: number;
  tags: string[];
  photo: File;

   public constructor(init?: Partial<PhotoDto>) {
          Object.assign(this, init);
      }
}
