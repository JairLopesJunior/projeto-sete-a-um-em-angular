import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './core/pages/pages.module';
import { SharedModule } from './shared/shared.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PagesModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
