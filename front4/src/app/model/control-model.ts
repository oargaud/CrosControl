


export class ControlDto{

  id: number;
  name: string;
  status: boolean;

   public constructor(init?: Partial<ControlDto>) {
          Object.assign(this, init);
      }
}
