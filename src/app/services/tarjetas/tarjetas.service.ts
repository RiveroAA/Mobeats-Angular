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

  pedirTarjetasTestimonios() {
    return this.http.get<any[]>('http://localhost:1337/api/secciones?populate=tarjetas.imagenes&filters[id][$eq]=22');
  }

  pedirTarjetasServicios() {
    return this.http.get<any[]>('http://localhost:1337/api/secciones?populate=tarjetas.imagenes&filters[id][$eq]=8')
  }

  pedirTarjetasSoluciones() {
    return this.http.get<any[]>('http://localhost:1337/api/secciones?populate=tarjetas.imagenes&filters[id][$eq]=9')
  }

  pedirTarjetasExploracion() {
    return this.http.get<any[]>('http://localhost:1337/api/secciones?populate=tarjetas.imagenes&filters[id][$eq]=11');
  }

  pedirTarjetasDesarrolloAMedida() {
    return this.http.get<any[]>('http://localhost:1337/api/secciones?populate=tarjetas.imagenes&filters[id][$eq]=12');
  }

  pedirTarjetasEquipoDeRescate() {
    return this.http.get<any[]>('http://localhost:1337/api/secciones?populate=tarjetas.imagenes&filters[id][$eq]=13')
  }

  pedirTarjetasEquipoDedicado() {
    return this.http.get<any[]>('http://localhost:1337/api/secciones?populate=tarjetas.imagenes&filters[id][$eq]=14')
  }

  pedirTarjetasAumentoDePersonal() {
    return this.http.get<any[]>('http://localhost:1337/api/secciones?populate=tarjetas.imagenes&filters[id][$eq]=15')
  }

  
}
