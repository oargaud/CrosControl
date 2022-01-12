
export class Model {
}


export class SagaDto{
   constructor(
        public  name: string
      ) { }
}



export class EditionDto{
   constructor(
      public  name: string
    ) { }
}


export class ArtistDto{
   constructor(
      public  lastname: string,
      public  firstname: string
    ) { }
}


export class BdDto{

  id: number;
  title: string;
  scenaristes: ArtistDto[];
  illustrateurs: ArtistDto[];
  edition: EditionDto;
  saga: SagaDto;
  tome: string;
  photos: PhotoDto[];
  statutPossession: StatutPossessionDto;

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


export class StatutPossessionDto{

  id: number;
  statut: string;

   public constructor(init?: Partial<StatutPossessionDto>) {
          Object.assign(this, init);
      }
}
