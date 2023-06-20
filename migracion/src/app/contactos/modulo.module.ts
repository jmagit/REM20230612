import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResolveFn, Router, RouterModule, Routes } from '@angular/router';


import { ContactosComponent, CONTACTOS_COMPONENTES, ContactosAddComponent, ContactosEditComponent, ContactosListComponent, ContactosViewComponent } from './componente.component';
import { PaginatorModule } from 'primeng/paginator';

import { ContactosDAOService } from './servicios.service';
import { EMPTY, catchError, map, } from 'rxjs';

export const idResolver: ResolveFn<any> = (route, state) => {
    let router = inject(Router)
    return inject(ContactosDAOService).get(+route.paramMap.get('id')!).pipe(
      map(data => { if (data) { return data; } else { throw 'Not found' } }),
      catchError(err => { router.navigate(['/404.html']); return EMPTY; })
    );
  };

export const routes: Routes = [
  { path: '', component: ContactosListComponent },
  { path: 'add', component: ContactosAddComponent },
  { path: ':id/edit', component: ContactosEditComponent, resolve: { elemento: idResolver } },
  { path: ':id', component: ContactosViewComponent, resolve: { elemento: idResolver } },
  { path: ':id/:kk', component: ContactosViewComponent, resolve: { elemento: idResolver } },
]

@NgModule({
    exports: [
        CONTACTOS_COMPONENTES,
        RouterModule,
    ],
    imports: [
    CommonModule, FormsModule, RouterModule.forChild(routes),
    PaginatorModule,
    CONTACTOS_COMPONENTES,
]
})
export class ContactosModule { }
