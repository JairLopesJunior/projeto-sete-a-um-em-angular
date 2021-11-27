import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './core/pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
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
