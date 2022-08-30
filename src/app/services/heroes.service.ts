import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private url = `${environment.apiUrl}auth`;

  constructor(private http: HttpClient) { }

  public validateUser = () =>
    this.http.get(`${this.url}/validateUser`);

}
