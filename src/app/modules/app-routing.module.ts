import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/secciones/home/home.component';
import { CasosDeExitoComponent } from '../components/secciones/casos-de-exito/casos-de-exito.component';
import { ServiciosComponent } from '../components/secciones/servicios/servicios.component';
import { SolucionesComponent } from '../components/secciones/soluciones/soluciones.component';
import { ExploracionComponent } from '../components/secciones/exploracion/exploracion.component';
import { DesarrolloAMedidaComponent } from '../components/secciones/desarrollo-a-medida/desarrollo-a-medida.component';
import { EquipoDeRescateComponent } from '../components/secciones/equipo-de-rescate/equipo-de-rescate.component';
import { EquipoDedicadoComponent } from '../components/secciones/equipo-dedicado/equipo-dedicado.component';
import { AumentoDePersonalComponent } from '../components/secciones/aumento-de-personal/aumento-de-personal.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'casos_de_exito', component: CasosDeExitoComponent},
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
export class AppRoutingModule { }
