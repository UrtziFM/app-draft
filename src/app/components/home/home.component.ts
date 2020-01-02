import { Component, OnInit } from '@angular/core';

import { NasaService } from '../../services/nasa.service';

import { INasa } from '../../interfaces/nasa.interface';
import { INasaResponse } from '../../interfaces/nasa.interface';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nasaimages: object[] = [];

  constructor(private nasaService: NasaService) { }

  ngOnInit() {
    this.nasaService.getalbums()
    .subscribe((data: INasaResponse) => {
      const results: INasa[] = data.results;

      const formattedresults = results.map(({ id, name, image }) => ({
        id,
        name,
        image,
      }));

      this.nasaimages = [...formattedresults];
    });
  }
}
