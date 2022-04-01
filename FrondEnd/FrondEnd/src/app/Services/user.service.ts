import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  myAppUrl = 'https://localhost:44365/';
  myApiUrl = 'api/user/PostUsers';
  myApiGetUrl ='api/user';
  list: any;

  constructor(private http: HttpClient) { }

  SaveUser(user: User ) : Observable<User>{
   return this.http.post<User>(this.myAppUrl + this.myApiUrl, user);
  }

    getUsers() : <any>{
      debugger
    try {
      this.http.get(this.myAppUrl + this.myApiGetUrl).
      subscribe((data: any) => { debugger
      return data;
    });
    } catch (error) {
      console.log(error);
    }
  }

}
