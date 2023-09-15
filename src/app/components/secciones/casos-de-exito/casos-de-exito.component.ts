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
  selector: 'app-casos-de-exito',
  templateUrl: './casos-de-exito.component.html',
  styleUrls: ['./casos-de-exito.component.css']
})
export class CasosDeExitoComponent {
  tarjetas: Tarjeta[] = [];
  isFirstIteration: boolean = true;

  constructor(private tarjetasService: TarjetasService) {}

  ngOnInit() {
    this.mostrarTarjetasCasosDeExito();
  }

  mostrarTarjetasCasosDeExito() {
    this.tarjetasService.pedirTarjetasCasosDeExito().subscribe((response: any) => {
      this.tarjetas = response.data;
      console.log(this.tarjetas);
    });
  }
}
