import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// tslint:disable-next-line: no-inferrable-types
const baseUrl: string = 'https://restcountries.eu/rest/v2/';
// tslint:disable-next-line: no-inferrable-types
const albumUrl: string = `${baseUrl}all`;

@Injectable({
  providedIn: 'root'
})

export class NasaService {

  constructor(private http: HttpClient) { }

  getalbums() {
    return this.http.get(albumUrl);
  }
}
