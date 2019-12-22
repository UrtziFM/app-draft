import { Component, OnInit } from '@angular/core';
import { ILanguage } from '../../interfaces/language.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  languages: ILanguage[];

  constructor(private apiService: ApiService) { 
    this.languages = this.apiService.getlanguages();
  }

  ngOnInit() {
  }

}
