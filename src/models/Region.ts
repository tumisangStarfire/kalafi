

export class Region {
  private id?: number;
  private name: string;

  /* constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  } */

  set setRegionName(name: string) {
    this.name = name;
  }

  get getRegionName(): string {
    return this.name;
  }

  set setRegionId(id: number) {
    this.id = id;
  }

  get getRegionId(): number {
    return this.id;
  }



}
