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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tarjetas: Tarjetas[] = [];
  isFirstIteration: boolean = true;

  constructor(private tarjetasService: TarjetasService) { }

  ngOnInit() {
    this.mostrarTarjetasHome();
  }

  mostrarTarjetasHome() {
    this.tarjetasService.pedirTarjetasHome().subscribe((response: any) => {
      this.tarjetas = response.data;
    });
  }
}