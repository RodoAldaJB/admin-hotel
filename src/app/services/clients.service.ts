import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Habitation, Lodging, NewHabitation, TypeHabitation } from '../interfaces/lodging';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private url: string = 'http://localhost:3000/';  

  private http = inject( HttpClient );
  
  constructor() { }

  getReservations(): Observable<Lodging[]>{
    return this.http.get<Lodging[]>(`${this.url}reservacion`)
  }

  getListHabitations(): Observable<Habitation[]>{
    return this.http.get<Habitation[]>(`${this.url}habitacion`)
  }

  getHabitation(id: string): Observable<any>{
    return this.http.get<any>(`${this.url}habitacion/${id}`)
  }
  
  setHabitation(habitation: NewHabitation ):Observable<NewHabitation>{
    return this.http.post<NewHabitation>(`${this.url}habitacion`, habitation)    
  }

  updateHabitation(id: any, habitation: Habitation ): Observable<Habitation>{
    return this.http.patch<Habitation>(`${this.url}habitacion/${id}`, habitation)
  }

  getTypeHabitations(): Observable<TypeHabitation[]>{
    return this.http.get<TypeHabitation[]>(`${this.url}tipo-habitacion`)
  }

  getTypeHabitation(id: string): Observable<TypeHabitation>{
    return this.http.get<TypeHabitation>(`${this.url}tipo-habitacion/${id}`)
  }
  
}
