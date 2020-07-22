export class GoogleObject {
  format: string;
  constructor(public q: string, public source: string, public target: string) {
    this.format = 'text';
  }
}
