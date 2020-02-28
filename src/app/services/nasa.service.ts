import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl: string = 'https://opentdb.com/api.php?';
const albumUrl: string = `${baseUrl}amount=10/`;

@Injectable({
  providedIn: 'root'
})

export class NasaService {

  constructor(private http: HttpClient) { }

  getalbums() {
    return this.http.get(albumUrl);
  }
}
