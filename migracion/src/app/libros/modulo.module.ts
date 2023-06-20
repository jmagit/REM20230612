import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { LIBROS_COMPONENTES, LibrosAddComponent, LibrosEditComponent, LibrosListComponent, LibrosViewComponent } from './componente.component';
import {PaginatorModule} from 'primeng/paginator';


export const routes: Routes = [
    { path: '', component: LibrosListComponent },
    { path: 'add', component: LibrosAddComponent },
    { path: ':id/edit', component: LibrosEditComponent },
    { path: ':id', component: LibrosViewComponent },
    { path: ':id/:kk', component: LibrosViewComponent },
]

@NgModule({
    exports: [
        LIBROS_COMPONENTES,
    ],
    imports: [
    CommonModule, FormsModule, RouterModule.forChild(routes),
    PaginatorModule,
    LIBROS_COMPONENTES,
]
})
export default class LibrosModule { }
