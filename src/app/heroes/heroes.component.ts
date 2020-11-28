import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
//exporto class para poder importarlo en otros lados...
export class HeroesComponent implements OnInit {
  heroes = HEROES;


  selectedHero: Hero;


  constructor() { }

  ngOnInit(): void { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}