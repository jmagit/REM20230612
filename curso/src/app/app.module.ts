import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerService, MyCoreModule } from '@my/core';
import { CommonComponentModule } from './common-component';
import { CommonServicesModule } from './common-services';
import { MainModule } from './main';
import { SecurityModule } from './security';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
