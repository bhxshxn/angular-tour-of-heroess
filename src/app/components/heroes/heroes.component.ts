import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/types/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heros!: Hero[];
  constructor(private hero: HeroService) {}
  ngOnInit(): void {
    this.hero.getHeroes().subscribe((hero: Hero[]) => {
      this.heros = hero;
    });
  }
}
