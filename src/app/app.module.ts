import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/secciones/nav-bar/nav-bar.component';
import { FooterComponent } from './components/secciones/footer/footer.component';
import { HomeComponent } from './components/secciones/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CasosDeExitoComponent } from './components/secciones/casos-de-exito/casos-de-exito.component';
import { TestimoniosComponent } from './components/secciones/testimonios/testimonios.component';
import { ServiciosComponent } from './components/secciones/servicios/servicios.component';
import { SolucionesComponent } from './components/secciones/soluciones/soluciones.component';
import { ExploracionComponent } from './components/secciones/exploracion/exploracion.component';
import { DesarrolloAMedidaComponent } from './components/secciones/desarrollo-a-medida/desarrollo-a-medida.component';
import { EquipoDeRescateComponent } from './components/secciones/equipo-de-rescate/equipo-de-rescate.component';
import { EquipoDedicadoComponent } from './components/secciones/equipo-dedicado/equipo-dedicado.component';
import { AumentoDePersonalComponent } from './components/secciones/aumento-de-personal/aumento-de-personal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
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
    AumentoDePersonalComponent
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
