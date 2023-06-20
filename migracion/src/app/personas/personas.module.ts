import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyCoreModule } from '@my/core';



@NgModule({
  declarations: [
    FormularioComponent
  ],
  exports: [
    FormularioComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, MyCoreModule,
  ]
})
export class PersonasModule { }
