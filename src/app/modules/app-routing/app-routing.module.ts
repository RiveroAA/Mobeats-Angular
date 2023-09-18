import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/components/secciones/home/home.component';
import { CasosDeExitoComponent } from 'src/app/components/secciones/casos-de-exito/casos-de-exito.component';
import { SobreNosotrosComponent } from 'src/app/components/secciones/sobre-nosotros/sobre-nosotros.component';
import { QueHacemosComponent } from 'src/app/components/secciones/que-hacemos/que-hacemos.component';
import { EmpleosComponent } from 'src/app/components/secciones/empleos/empleos.component';
import { ContactoComponent } from 'src/app/components/secciones/contacto/contacto.component';
import { ServiciosComponent } from 'src/app/components/secciones/servicios/servicios.component';
import { SolucionesComponent } from 'src/app/components/secciones/soluciones/soluciones.component';
import { ExploracionComponent } from 'src/app/components/secciones/exploracion/exploracion.component';
import { DesarrolloAMedidaComponent } from 'src/app/components/secciones/desarrollo-a-medida/desarrollo-a-medida.component';
import { EquipoDeRescateComponent } from 'src/app/components/secciones/equipo-de-rescate/equipo-de-rescate.component';
import { EquipoDedicadoComponent } from 'src/app/components/secciones/equipo-dedicado/equipo-dedicado.component';
import { AumentoDePersonalComponent } from 'src/app/components/secciones/aumento-de-personal/aumento-de-personal.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'Casos de éxito', component: CasosDeExitoComponent },
  { path: 'Nosotros', component: SobreNosotrosComponent },
  { path: 'Qué hacemos', component: QueHacemosComponent},
  { path: 'Contacto', component: ContactoComponent},
  { path: 'Empleos', component: EmpleosComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'soluciones', component: SolucionesComponent},
  { path: 'exploracion', component: ExploracionComponent},
  { path: 'desarrollo_a_medida', component: DesarrolloAMedidaComponent},
  { path: 'equipo_de_rescate', component: EquipoDeRescateComponent},
  { path: 'equipo_dedicado', component: EquipoDedicadoComponent},
  { path: 'aumento_de_personal', component: AumentoDePersonalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}