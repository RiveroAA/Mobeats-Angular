import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarjetasService {

  constructor(private http: HttpClient) { }
  pedirTarjetasHome() {
    return this.http.get<any[]>('http://localhost:1337/api/secciones?populate=tarjetas.imagenes&filters[id][$eq]=2');
  }
  pedirTarjetasCasosDeExito() {
    return this.http.get<any[]>('http://localhost:1337/api/secciones?populate=tarjetas.imagenes&filters[id][$eq]=5');
  }

  pedirTarjetasNosotros() {
    return this.http.get<any[]>('http://localhost:1337/api/secciones?populate=tarjetas.imagenes&filters[id][$eq]=6');
  }

  pedirTarjetasContacto(){
    return this.http.get<any[]>('http://localhost:1337/api/secciones?populate=tarjetas.imagenes&filters[id][$eq]=16');
  }

  pedirTarjetasEmpleos() {
    return this.http.get<any[]>('http://localhost:1337/api/secciones?populate=tarjetas.imagenes&filters[id][$eq]=19');
  }
}