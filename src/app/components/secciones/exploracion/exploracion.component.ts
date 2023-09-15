import { Component } from '@angular/core';
import { TarjetasService } from 'src/app/services/tarjetas/tarjetas.service';

interface Tarjeta {
  id: number;
  attributes: {
    nombre: string;
    visible: boolean;
    contenido: string | null;
    orden: number;
    directorio: string | null;
    tarjetas: {
      data: {
        id: number;
        attributes: {
          titulo: string | null;
          subtitulo: string | null;
          texto: string | null;
          boton: string | null;
          imagenes: {
            data: {
              attributes: {
                name: string;
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
  selector: 'app-exploracion',
  templateUrl: './exploracion.component.html',
  styleUrls: ['./exploracion.component.css']
})
export class ExploracionComponent {
  tarjetas: Tarjeta[] = [];

  constructor(private tarjetasService: TarjetasService) {}

  ngOnInit() {
    this.mostrarTarjetasExploracion();
  }

  mostrarTarjetasExploracion() {
    this.tarjetasService.pedirTarjetasExploracion().subscribe((response: any) => {
      this.tarjetas = response.data;
    });
  }
}
