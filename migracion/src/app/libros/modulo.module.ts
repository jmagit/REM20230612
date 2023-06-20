import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MyCoreModule } from '@my/core';
import { CommonServicesModule } from '../common-services';
import { LIBROS_COMPONENTES, LibrosAddComponent, LibrosEditComponent, LibrosListComponent, LibrosViewComponent } from './componente.component';
import {PaginatorModule} from 'primeng/paginator';
import { CommonComponentModule } from '../common-component';

export const routes: Routes = [
    { path: '', component: LibrosListComponent },
    { path: 'add', component: LibrosAddComponent },
    { path: ':id/edit', component: LibrosEditComponent },
    { path: ':id', component: LibrosViewComponent },
    { path: ':id/:kk', component: LibrosViewComponent },
]

@NgModule({
  declarations: [
    LIBROS_COMPONENTES,
  ],
  exports: [
    LIBROS_COMPONENTES,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(routes),
    MyCoreModule, CommonServicesModule,
    PaginatorModule, CommonComponentModule, MyCoreModule,
  ]
})
export default class LibrosModule { }
