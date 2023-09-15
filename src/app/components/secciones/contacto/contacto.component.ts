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
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  tarjetas: Tarjetas[] = [];

  constructor (private tarjetasService: TarjetasService) {};

  ngOnInit() {
    this.mostrarTarjetasContacto();
  }

  mostrarTarjetasContacto(){
    this.tarjetasService.pedirTarjetasContacto().subscribe((response: any) => {
      this.tarjetas = response.data;
    });
  }
}
