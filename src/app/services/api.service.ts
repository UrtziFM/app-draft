import { Injectable } from '@angular/core';
import { ILanguage } from '../interfaces/language.interface';
import { getApiResponse } from '../api/api.languages';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public languages: ILanguage[];

  constructor() {
    this.languages = [];
    this.getInitialResponse();
  }

  public getInitialResponse(): void {
    getApiResponse().then((response: ILanguage[]) => {
      response.forEach((language: ILanguage) => {
        this.languages.push(language);
      });
    });
  }
  public getlanguages(): ILanguage[] {
    return this.languages;
  }
  private checkIds(firstId: string|number, secondId: string|number): boolean {
    return firstId.toString() === secondId.toString()
  }
  public getlanguageById(id: number|string): ILanguage {
    return this.languages.find((language: ILanguage) => {
      return this.checkIds(language.id, id);
    });
  }

}
