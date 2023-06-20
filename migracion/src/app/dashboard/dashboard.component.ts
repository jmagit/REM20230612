import { Component } from '@angular/core';
import GraficoSvgComponent from 'src/lib/independientes/grafico-svg/grafico-svg.component';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { DemosComponent } from '../demos/demos.component';
import { HomeComponent } from '../main';
import { FormularioTComponent } from '../formulario-t/formulario-t.component';
import { GeolocalizacionComponent } from '../geolocalizacion/geolocalizacion.component';
import { FormularioRxComponent } from '../formulario-rx/formulario-rx.component';
import { FormularioComponent } from '../personas';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  menu = [
    { texto: 'formulario T', icono: 'fa-solid fa-chalkboard-user', componente: FormularioTComponent},
    { texto: 'formulario Rx', icono: 'fa-solid fa-chalkboard-user', componente: FormularioRxComponent},
    { texto: 'personas', icono: 'fa-solid fa-chalkboard-user', componente: FormularioComponent},
    { texto: 'inicio', icono: 'fa-solid fa-house', componente: HomeComponent},
    { texto: 'demos', icono: 'fa-solid fa-chalkboard-user', componente: DemosComponent },
    { texto: 'geolocalización', icono: 'fa-solid fa-earth-europe', componente: GeolocalizacionComponent },
    { texto: 'gráfico', icono: 'fa-solid fa-image', componente: GraficoSvgComponent},
    { texto: 'calculadora', icono: 'fa-solid fa-calculator', componente: CalculadoraComponent},
  ]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  seleccionado: any = this.menu[0].componente

  seleccionar(index: number) {
    this.seleccionado = this.menu[index].componente
  }

}
