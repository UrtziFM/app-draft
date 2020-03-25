import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'http://localhost:3001/auth';

  constructor(private http: HttpClient) { }

  public isAuthenticated(): boolean {
    const userData = localStorage.getItem('userInfo');
    if (userData && JSON.parse(userData)) {
      return true;
    }
    return false;
  }

  public setUserInfo(user){
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  public validate(email, password) {
    const url = `${this.baseUrl}/login`;
    return this.http.post(url, {'email' : email, 'password' : password}).toPromise();
  }
}
