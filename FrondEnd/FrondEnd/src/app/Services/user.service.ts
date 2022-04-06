import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  myAppUrl = 'https://localhost:44365/';
  myApiUrl = 'api/user/PostUsers';
  myApiGetUrl ='api/user/';
  list: User[] = [];
 
  private UpdateUser = new BehaviorSubject<User>({} as any);

  constructor(private http: HttpClient) { }

  SaveUser(user: User ) : Observable<User>{
   return this.http.post<User>(this.myAppUrl + this.myApiUrl, user);
  }

  //   getUsers() : <any>{
  //     debugger
  //   try {
  //     this.http.get(this.myAppUrl + this.myApiGetUrl).
  //     subscribe((data: any) => { debugger
  //     return data;
  //   });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  deleteUser(idUser: number):  Observable<User>{
    return this.http.delete<User>(this.myAppUrl + this.myApiGetUrl + idUser); 

  }

  getUsers() {
 this.http.get(this.myAppUrl + this.myApiGetUrl)
                    .subscribe(
                      data => {
                       this.list = data as User[];
                       console.log('Hola', this.list);

                    });
  }

  UpdateUserFeed(idUser:number, user: User):Observable<User>{
    return this.http.put<User>(this.myAppUrl + this.myApiGetUrl + idUser,user );
    this.UpdateUser.next(user);
  }

  updateUser(user:User){
    this.UpdateUser.next(user); 
  }
  getUser$(): Observable<User>{
    return this.UpdateUser.asObservable();
  }
//ejemplo
  actualizarUsuario(idUser: any, user: User): Observable<User>{
      return this.http.put<User>(this.myAppUrl + this.myApiUrl + idUser, user);
  }

  actualizar (user : User){
    this.UpdateUser.next(user);
  }
  obtenerUsuarios$(): Observable<User>{
    return this.UpdateUser.asObservable();
  }
}
