/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AuthInterceptor, SecurityModule } from './app/security';
import { AjaxWaitInterceptor, MainModule } from './app/main';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoggerService, ERROR_LEVEL } from '@my/core';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FormsModule, ReactiveFormsModule, MainModule, SecurityModule, 
        // PersonasModule, GraficoSvgComponent,
        AppRoutingModule),
        LoggerService,
        { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
        // { provide: LOCALE_ID, useValue: 'es'}
        { provide: HTTP_INTERCEPTORS, useClass: AjaxWaitInterceptor, multi: true, },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, },
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
