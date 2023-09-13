import { Component, OnInit } from '@angular/core';
import { TarjetasService } from 'src/app/services/tarjetas/tarjetas.service';

interface Tarjetas {
  attributes: {
    tarjetas: {
      data: {
        attributes: {
          titulo: string | null,
          subtitulo: string | null,
          texto: string | null,
          boton: string | null,
          imagenes: {
            data: {
              attributes: {
                url: string;
              };
            }[];
          };
        };
      }[];
    };
  };
}

@Component({
  selector: 'app-empleos',
  templateUrl: './empleos.component.html',
  styleUrls: ['./empleos.component.css']
})
export class EmpleosComponent {
  tarjetas: Tarjetas[] = [];

  constructor (private tarjetasService: TarjetasService) {};

  ngOnInit() {
    this.mostrarTarjetasEmpleos();
  }

  mostrarTarjetasEmpleos(){
    this.tarjetasService.pedirTarjetasEmpleos().subscribe((response: any) => {
      this.tarjetas = response.data;
    });
  }
}