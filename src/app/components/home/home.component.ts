import { Component, OnInit, ViewChild } from '@angular/core';

import { NasaService } from '../../services/nasa.service';

import { INasa } from '../../interfaces/nasa.interface';

import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nasaimages: object[] = [];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  constructor(private nasaService: NasaService) { }

  ngOnInit() {
    this.nasaService.getalbums()
    .subscribe((data: INasa[]) => {

      const formattedresults = data.map(({ name, capital, region, population, flag }) => ({
        name,
        capital,
        region,
        population,
        flag
      }));

      this.nasaimages = [...formattedresults];
    });
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
