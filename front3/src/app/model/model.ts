
export class Model {
}


export class SagaDto{

  id: number;
  name: string;

  public constructor(init?: Partial<SagaDto>) {
   Object.assign(this, init);
  }
}


export class EditionDto{

  id: number;
  name: string;

  public constructor(init?: Partial<EditionDto>) {
   Object.assign(this, init);
  }
}


export class ArtistDto{

  id: number;
  lastname: string;
  firstname: string;

  public constructor(init?: Partial<ArtistDto>) {
    Object.assign(this, init);
  }
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
