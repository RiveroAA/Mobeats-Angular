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
  selector: 'app-desarrollo-a-medida',
  templateUrl: './desarrollo-a-medida.component.html',
  styleUrls: ['./desarrollo-a-medida.component.css']
})
export class DesarrolloAMedidaComponent {
  tarjetas: Tarjeta[] = [];

  constructor(private tarjetasService: TarjetasService) {}

  ngOnInit() {
    this.mostrarTarjetasDesarrolloAMedida();
  }

  mostrarTarjetasDesarrolloAMedida() {
    this.tarjetasService.pedirTarjetasDesarrolloAMedida().subscribe((response: any) => {
      this.tarjetas = response.data;
    });
  }
}
