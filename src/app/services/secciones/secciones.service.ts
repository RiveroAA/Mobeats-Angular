import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeccionesService {

  constructor(private http: HttpClient) { }

  pedirSeccionesNavBar(){
    return this.http.get<any[]>('http://localhost:1337/api/secciones?populate=*&filters[id_padre][$eq]=1&sort=orden');
  }
}
