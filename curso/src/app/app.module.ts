import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ERROR_LEVEL, LoggerService, MyCoreModule } from '@my/core';
import { CommonComponentModule } from './common-component';
import { CommonServicesModule } from './common-services';
import { MainModule } from './main';
import { SecurityModule } from './security';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    AppRoutingModule, MyCoreModule, CommonComponentModule, CommonServicesModule,
    MainModule, SecurityModule
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
