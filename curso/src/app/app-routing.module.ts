import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DemosComponent } from './demos/demos.component';
import { HomeComponent, PageNotFoundComponent } from './main';
import { AuthCanActivateFn, AuthService, AuthWithRedirectCanActivate, InRoleCanActivateFn, LoginFormComponent, RegisterUserComponent } from './security';
import { FormularioTComponent } from './formulario-t/formulario-t.component';
// import { ContactosListComponent, ContactosAddComponent, ContactosEditComponent, ContactosViewComponent, routes as ContactosRoutes } from './contactos';
// import GraficoSvgComponent from 'src/lib/independientes/grafico-svg/grafico-svg.component';

export function svgFiles(url: UrlSegment[]) {
  return url.length === 1 && url[0].path.endsWith('.svg') ? ({consumed: url}) : null;
}

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'demos', component: DemosComponent },
  { path: 'form', component: FormularioTComponent, canActivate: [ AuthWithRedirectCanActivate('/login') ] },
  { path: 'chisme/de/hacer/numeros', component: CalculadoraComponent, title: 'Calculadora' },
  // { path: 'contactos', component: ContactosListComponent },
  // { path: 'contactos/add', component: ContactosAddComponent, canActivate: [AuthCanActivateFn], data: { redirectTo: '/login' } },
  // { path: 'contactos/:id/edit', component: ContactosEditComponent, canDeactivate: [() => inject(AuthService).isAutenticated] },
  // { path: 'contactos/:id', component: ContactosViewComponent },
  // { path: 'contactos/:id/:kk', component: ContactosViewComponent },
  // { path: 'contactos', children: [
  //   { path: '', component: ContactosListComponent },
  //   { path: 'add', component: ContactosAddComponent },
  //   { path: ':id/edit', component: ContactosEditComponent },
  //   { path: ':id', component: ContactosViewComponent },
  //   { path: ':id/:kk', component: ContactosViewComponent },
  // ]},
  // { path: 'contactos', children: ContactosRoutes},
  { path: 'contactos',  loadChildren: () => import('./contactos/').then(mod => mod.ContactosModule)},
  { path: 'alysia/baxendale', redirectTo: '/contactos/43' },
  { path: 'libros', loadChildren: () => import('./libros/modulo.module'), canActivate: [AuthCanActivateFn, InRoleCanActivateFn], data: { redirectTo: '/login', roles: ['Empleados']}  },
  { path: 'login', component: LoginFormComponent },
  { path: 'registro', component: RegisterUserComponent },
  { path: 'config',  loadChildren: () => import('./config/config.module')},
  { path: 'ws',  loadChildren: () => import('./web-socket').then(mod => mod.WebSocketModule)},

  // { matcher: svgFiles, component: GraficoSvgComponent},
  { matcher: svgFiles, loadComponent: () => import('../lib/independientes/grafico-svg/grafico-svg.component')},
  { path: '404.html', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
  // { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true, enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
