import { Component } from '@angular/core';
import { SeccionesService } from 'src/app/services/secciones/secciones.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  secciones: any[] = [];
  isFirstIteration: boolean = true;
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