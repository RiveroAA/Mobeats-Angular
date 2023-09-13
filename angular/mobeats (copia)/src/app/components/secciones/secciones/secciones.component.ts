import { Component, OnInit } from '@angular/core';
import { SeccionesService } from 'src/app/services/secciones/secciones.service';
@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent {
  secciones: any[] = [];
  constructor(private seccionesService: SeccionesService) { }
  ngOnInit() {
    this.mostrarSecciones();
  }
  mostrarSecciones() {
    this.seccionesService.pedirSeccionesNavBar().subscribe((response: any) => {
      this.secciones = response.data;
    });
  }
}