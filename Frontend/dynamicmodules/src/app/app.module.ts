import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicmodulesComponent } from './dynamicmodules/dynamicmodules.component';
import { ModuleselectionComponent } from './moduleselection/moduleselection/moduleselection.component';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterdataentryComponent } from './masterdataentry/masterdataentry.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicmodulesComponent,
    ModuleselectionComponent,
    MasterdataentryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
