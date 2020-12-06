import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
//exporto class para poder importarlo en otros lados...
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void { this.getHeroes(); }

  getHeroes(): void {
    //The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }


}
