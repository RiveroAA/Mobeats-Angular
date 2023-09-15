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
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css']
})
export class TestimoniosComponent {
  tarjetas: Tarjeta[] = [];

  constructor(private tarjetasService: TarjetasService) {}

  ngOnInit() {
    this.mostrarTarjetasTestimonios();
  }

  mostrarTarjetasTestimonios() {
    this.tarjetasService.pedirTarjetasTestimonios().subscribe((response: any) => {
      this.tarjetas = response.data;
    });
  }
}
