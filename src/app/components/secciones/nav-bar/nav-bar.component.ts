import { Component } from '@angular/core';
import { SeccionesService } from 'src/app/services/secciones/secciones.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
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
