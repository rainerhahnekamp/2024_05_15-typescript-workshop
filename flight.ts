export class Flight {
  constructor(public from: string, public to: string) {}

  log() {
    return `${this.from} - ${this.to}`;
  }
}
