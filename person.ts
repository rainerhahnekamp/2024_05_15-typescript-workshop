export class Person {
  #code = "P";

  fullname = this.vorname + this.nachname;

  constructor(
    public id: number,
    public vorname: string,
    public nachname: string
  ) {}
  toString() {
    return `${this.nachname}, ${this.vorname}`;
  }
}
