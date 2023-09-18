import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SeccionesComponent } from './components/secciones/secciones/secciones.component';
import { NavbarComponent } from './components/secciones/navbar/navbar.component';
import { UnidadComponent } from './components/unidad/unidad.component';
import { FooterComponent } from './components/secciones/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CasosDeExitoComponent } from './components/secciones/casos-de-exito/casos-de-exito.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { HomeComponent } from './components/secciones/home/home.component';
import { ContactoComponent } from './components/secciones/contacto/contacto.component';
import { EnglishComponent } from './components/secciones/english/english.component';
import { NosotrosComponent } from './components/secciones/nosotros/nosotros.component';
import { EmpleosComponent } from './components/secciones/empleos/empleos.component';
import { TestimoniosComponent } from './components/secciones/testimonios/testimonios.component';
import { ServiciosComponent } from './components/secciones/servicios/servicios.component';
import { SolucionesComponent } from './components/secciones/soluciones/soluciones.component';
import { ExploracionComponent } from './components/secciones/exploracion/exploracion.component';
import { DesarrolloAMedidaComponent } from './components/secciones/desarrollo-a-medida/desarrollo-a-medida.component';
import { EquipoDeRescateComponent } from './components/secciones/equipo-de-rescate/equipo-de-rescate.component';
import { EquipoDedicadoComponent } from './components/secciones/equipo-dedicado/equipo-dedicado.component';
import { AumentoDePersonalComponent } from './components/secciones/aumento-de-personal/aumento-de-personal.component';
import { FormularioHablemosComponent } from './components/formularios/formulario-hablemos/formulario-hablemos.component';
import { FormularioContactoComponent } from './components/formularios/formulario-contacto/formulario-contacto.component';
import { FormularioEmpleosComponent } from './components/formularios/formulario-empleos/formulario-empleos.component';

@NgModule({
  declarations: [
    AppComponent,
    SeccionesComponent,
    NavbarComponent,
    UnidadComponent,
    FooterComponent,
    CasosDeExitoComponent,
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    EnglishComponent,
    EmpleosComponent,
    FooterComponent,
    HomeComponent,
    CasosDeExitoComponent,
    TestimoniosComponent,
    ServiciosComponent,
    SolucionesComponent,
    ExploracionComponent,
    DesarrolloAMedidaComponent,
    EquipoDeRescateComponent,
    EquipoDedicadoComponent,
    AumentoDePersonalComponent,
    FormularioHablemosComponent,
    FormularioContactoComponent,
    FormularioEmpleosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
