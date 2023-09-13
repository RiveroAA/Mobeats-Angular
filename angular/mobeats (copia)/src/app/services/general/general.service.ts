import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  constructor(private http: HttpClient) { }

  pedirSucursales() {
    return this.http.get<any[]>('http://localhost:1337/api/sucursals?populate=*');
  }
  pedirRedes() {
    return this.http.get<any[]>('http://localhost:1337/api/redes?populate=*');
  }
  pedirTecnologias() {
    return this.http.get<any[]>('http://localhost:1337/api/tecnologias?populate=*');
  }
  pedirEmpleados() {
    return this.http.get<any[]>('http://localhost:1337/api/empleados?populate=*');
  }
  pedirServicios() {
    return this.http.get<any[]>('http://localhost:1337/api/servicios?populate=*');
  }
}