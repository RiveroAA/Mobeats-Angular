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
  selector: 'app-equipo-de-rescate',
  templateUrl: './equipo-de-rescate.component.html',
  styleUrls: ['./equipo-de-rescate.component.css']
})
export class EquipoDeRescateComponent {
  tarjetas: Tarjeta[] = [];

  constructor(private tarjetasService: TarjetasService) {}

  ngOnInit() {
    this.mostrarTarjetasEquipoDeRescate();
  }

  mostrarTarjetasEquipoDeRescate() {
    this.tarjetasService.pedirTarjetasEquipoDeRescate().subscribe((response: any) => {
      this.tarjetas = response.data;
    });
  }
}
