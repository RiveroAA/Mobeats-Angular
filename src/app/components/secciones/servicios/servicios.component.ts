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
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  tarjetas: Tarjeta[] = [];

  constructor(private tarjetasService: TarjetasService) {}

  ngOnInit() {
    this.mostrarTarjetasServicios();
  }

  mostrarTarjetasServicios() {
    this.tarjetasService.pedirTarjetasServicios().subscribe((response: any) => {
      this.tarjetas = response.data;
    });
  }
}
