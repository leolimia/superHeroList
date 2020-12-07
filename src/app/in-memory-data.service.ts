import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr jeringa' },
      { id: 12, name: 'NarcoNacho' },
      { id: 13, name: 'Bombucha' },
      { id: 14, name: 'Cerealitas' },
      { id: 15, name: 'PibeMangera' },
      { id: 16, name: 'Hombre tacho' },
      { id: 17, name: 'Dynamita' },
      { id: 18, name: 'Dr IVA' },
      { id: 20, name: 'Fachovich' },
      { id: 19, name: 'Mathilda' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}