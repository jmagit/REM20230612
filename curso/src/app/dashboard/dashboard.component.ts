import { Component } from '@angular/core';
import GraficoSvgComponent from 'src/lib/independientes/grafico-svg/grafico-svg.component';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { DemosComponent } from '../demos/demos.component';
import { HomeComponent } from '../main';
import { FormularioTComponent } from '../formulario-t/formulario-t.component';
import { GeolocalizacionComponent } from '../geolocalizacion/geolocalizacion.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  menu = [
    { texto: 'geolocalización', icono: 'fa-solid fa-earth-europe', componente: GeolocalizacionComponent },
    { texto: 'demos', icono: 'fa-solid fa-chalkboard-user', componente: DemosComponent },
    { texto: 'formulario', icono: 'fa-solid fa-chalkboard-user', componente: FormularioTComponent},
    { texto: 'inicio', icono: 'fa-solid fa-house', componente: HomeComponent},
    { texto: 'gráfico', icono: 'fa-solid fa-image', componente: GraficoSvgComponent},
    { texto: 'calculadora', icono: 'fa-solid fa-calculator', componente: CalculadoraComponent},
  ]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  seleccionado: any = this.menu[0].componente

  seleccionar(index: number) {
    this.seleccionado = this.menu[index].componente
  }

}
