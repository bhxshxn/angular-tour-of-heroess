import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/types/hero';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-hero',
  templateUrl: './single-hero.component.html',
  styleUrls: ['./single-hero.component.css'],
})
export class SingleHeroComponent implements OnInit {
  hero!: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.heroService
      .getSingleHero(parseInt(this.route.snapshot.paramMap.get('id')!))
      .subscribe((hero) => {
        this.hero = hero[0];
      });
  }

  goBack() {
    this.location.back();
  }
}
