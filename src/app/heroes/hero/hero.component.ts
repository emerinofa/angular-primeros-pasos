import { Component } from '@angular/core';

@Component({
  selector: 'app--heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Spiderman';
  public age: number = 30;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeName(newName: string): void {
    this.name = newName;
  }

  changeAge(newAge: number): void {
    this.age = newAge;
  }

  resetForm(): void {
    this.name = 'Spiderman';
    this.age = 30;
  }
}
