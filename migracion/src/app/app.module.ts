import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ERROR_LEVEL, LoggerService, MyCoreModule } from '@my/core';
import { CommonComponentModule } from './common-component';
import { CommonServicesModule } from './common-services';
import { AjaxWaitInterceptor, MainModule } from './main';
import { AuthInterceptor, SecurityModule } from './security';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DemosComponent } from './demos/demos.component';
import { FormularioTComponent } from './formulario-t/formulario-t.component';
import { GeolocalizacionComponent } from './geolocalizacion/geolocalizacion.component';
import { FormularioRxComponent } from './formulario-rx/formulario-rx.component';
// import GraficoSvgComponent from 'src/lib/independientes/grafico-svg/grafico-svg.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { PersonasModule } from './personas';
// import { ContactosModule } from './contactos';

// import { registerLocaleData } from '@angular/common';
// import localeEs from '@angular/common/locales/es';
// import localeEsExtra from '@angular/common/locales/extra/es';
// registerLocaleData(localeEs, 'es', localeEsExtra);

@NgModule({
  declarations: [
    AppComponent, CalculadoraComponent, DemosComponent, FormularioTComponent, GeolocalizacionComponent, FormularioRxComponent,
    // DashboardComponent,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    MyCoreModule, CommonComponentModule, CommonServicesModule,
    MainModule, SecurityModule,
    // PersonasModule, GraficoSvgComponent,
    AppRoutingModule,
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
    // { provide: LOCALE_ID, useValue: 'es'}
    { provide: HTTP_INTERCEPTORS, useClass: AjaxWaitInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
