import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/types/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes!: Hero[];
  constructor(private heroServices: HeroService) {}
  ngOnInit(): void {
    this.heroServices.getTopHeroes().subscribe((hero) => {
      this.heroes = hero;
    });
  }
}
