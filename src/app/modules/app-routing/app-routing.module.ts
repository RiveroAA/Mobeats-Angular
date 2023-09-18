import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/components/secciones/home/home.component';
import { CasosDeExitoComponent } from 'src/app/components/secciones/casos-de-exito/casos-de-exito.component';
import { SobreNosotrosComponent } from 'src/app/components/secciones/sobre-nosotros/sobre-nosotros.component';
import { QueHacemosComponent } from 'src/app/components/secciones/que-hacemos/que-hacemos.component';
import { EmpleosComponent } from 'src/app/components/secciones/empleos/empleos.component';
import { ContactoComponent } from 'src/app/components/secciones/contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'Casos de éxito', component: CasosDeExitoComponent },
  { path: 'Nosotros', component: SobreNosotrosComponent },
  { path: 'Qué hacemos', component: QueHacemosComponent},
  { path: 'Contacto', component: ContactoComponent},
  { path: 'Empleos', component: EmpleosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}