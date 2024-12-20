import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { userAuth } from '../interfaces/userAuth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost:3000/usuario/';
  
  private http = inject(HttpClient);
  private router = inject(Router);
  
  private userDataR = new BehaviorSubject<any>(null);
  userDataR$ = this.userDataR.asObservable();

  constructor(){

    //verificar el token
    this.getById(String(localStorage.getItem('user'))).subscribe( resp =>{
      this.setUserDataR(resp)
    },
    (err) => {
      this.router.navigate(['/login']);      
    });
  } 

  setUserDataR(data: any) {
    this.userDataR.next(data);
  }

  login(user: userAuth): Observable<userAuth> {
    return this.http.post<userAuth>(`${this.url}login`, user, { withCredentials: true }); // Añadir withCredentials aquí
  }

  getByEmail(user: userAuth) {
    return this.http.post(`${this.url}identify`, user);
  }

  updatePassword(id: any, user: any) {
    return this.http.patch(`${this.url}${id}`, user);
  }

  getById(id: string) {
    return this.http.get(`${this.url}${id}`);
  }  
}
