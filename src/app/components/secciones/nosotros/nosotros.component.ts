import { Component } from '@angular/core';
import { TarjetasService } from 'src/app/services/tarjetas/tarjetas.service';
import { SeccionesService } from 'src/app/services/secciones/secciones.service';
import { GeneralService } from 'src/app/services/general/general.service';

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

interface SeccionesNosotros {
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
        }
      }[];
    }
  }
}
interface Sucursales {
  attributes: {
    pais: string;
    direccion: string;
    localidad: string;
  }
}
interface Empleados {
  attributes: {
    nombre: string;
    puesto: string;
    email: string;
    imagen: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  }
}

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {
  tarjetas: Tarjetas[] = [];
  secciones: SeccionesNosotros[] = [];
  sucursales: Sucursales[] = [];
  empleados: Empleados[] = [];

  constructor(private tarjetasService: TarjetasService, private seccionesService: SeccionesService, private generalService: GeneralService) { }

  ngOnInit() {
    this.mostrarTarjetasNosotros();
    this.mostrarSeccionesNosotros();
    this.mostrarSucursales();
    this.mostrarEmpleados();
  }

  mostrarTarjetasNosotros() {
    this.tarjetasService.pedirTarjetasNosotros().subscribe((response: any) => {
      this.tarjetas = response.data;
    });
  }

  mostrarSeccionesNosotros() {
    this.seccionesService.pedirSeccionesNosotros().subscribe((response: any) => {
      this.secciones = response.data;
    });
  }

  mostrarSucursales() {
    this.generalService.pedirSucursales().subscribe((response: any) => {
      this.sucursales = response.data;
    });
  }
  mostrarEmpleados(){
    this.generalService.pedirEmpleados().subscribe((response: any) => {
      this.empleados = response.data;
    });
  }
}