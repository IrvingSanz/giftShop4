import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  myAppUrl = 'https://localhost:44365/';
  myApiUrl = 'api/user/PostUsers';
  list: listOfUsers[];

  constructor(private http: HttpClient) { }
  SaveUser(user: User ) : Observable<User>{
   return this.http.post<User>(this.myAppUrl + this.myApiUrl, user);
  }

  getUsers(){
    this.http.get(this.myAppUrl + this.myApiUrl).toPromise()
    .then(data => {
      this.list = data as listOfUsers[];
    });
  }

}
