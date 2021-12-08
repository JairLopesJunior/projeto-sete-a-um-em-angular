import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './core/pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RepetidasComponent } from './src/app/core/pages/repetidas/repetidas.component';

@NgModule({
  declarations: [
    AppComponent,
    RepetidasComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PagesModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
