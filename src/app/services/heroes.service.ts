import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private url = `${environment.apiUrl}heroe`;

  constructor(private http: HttpClient) { }

  public getHeroes = () =>
    this.http.get(`${this.url}/getHeroes`);

}
