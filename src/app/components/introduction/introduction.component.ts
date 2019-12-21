import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  name: string;
  surname: string;
  age: number;

  constructor() {
        this.name = 'Urtzi';
        this.surname = 'Arana';
        this.age = 38;
   }

  ngOnInit() {
    console.log(this.name);
    console.log(this.surname);
    console.log(this.age);
  }

}
