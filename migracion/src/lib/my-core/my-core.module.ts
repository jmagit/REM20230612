import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { PIPES_NUMERICOS } from './pipes/numericos.pipe';
import { DIRECTIVAS_ATRIBUTO } from './directives/atributos.directive';
import { UnlessDirective } from './directives/estructurales.directive';
import { MIS_VALIDADORES } from './directives/validadores/mis-validaciones.directive';
import { SizerComponent } from './components/my-sizer.component';
import { VALIDATORS_DATES } from './directives/validadores/dates.directive';



@NgModule({
  declarations: [
    PIPES_CADENAS, PIPES_NUMERICOS, MIS_VALIDADORES, DIRECTIVAS_ATRIBUTO, UnlessDirective, SizerComponent,
    VALIDATORS_DATES,
  ],
  exports: [
    PIPES_CADENAS, PIPES_NUMERICOS, MIS_VALIDADORES, DIRECTIVAS_ATRIBUTO, UnlessDirective, SizerComponent,
    VALIDATORS_DATES,
  ],
  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }
