import { Component } from 'angular2/core';
import { Hero }      from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><p>id: {{hero.id}}</p></div>
      <div>
        <label for="hero-name">name: </label>
        <div>
          <input id="hero-name" [(ngModel)]="hero.name" placeholder="name">
        </div>
      </div>
    </div>
    `,
    inputs: ['hero']
})

export class HeroDetailComponent {
  hero: Hero;
}
