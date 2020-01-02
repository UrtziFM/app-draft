import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let baseUrl: string = 'https://rickandmortyapi.com/api/';
let albumUrl: string = `${baseUrl}character/`;

@Injectable({
  providedIn: 'root'
})

export class NasaService {

  constructor(private http: HttpClient) { }

  getalbums() {
    return this.http.get(albumUrl);
  }
}
