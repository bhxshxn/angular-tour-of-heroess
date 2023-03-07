import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../types/hero';
const api = 'http://localhost:5000/heroes';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(api);
  }

  getSingleHero(id: number): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${api}?id=${id}`);
  }

  getTopHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${api}?_limit=4`);
  }
}
