import { Injectable } from '@angular/core';
import {InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { heroId: 11, name: 'Dr Nice' },
      { heroId: 12, name: 'Narco' },
      { heroId: 13, name: 'Bombasto' },
      { heroId: 14, name: 'Celeritas' },
      { heroId: 15, name: 'Magneta' },
      { heroId: 16, name: 'RubberMan' },
      { heroId: 17, name: 'Dynama' },
      { heroId: 18, name: 'Dr IQ' },
      { heroId: 19, name: 'Magma' },
      { heroId: 20, name: 'Tornado' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.heroId)) + 1 : 11;
  }

  constructor() { }
}
