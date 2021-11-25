import { CampoControlErroComponent } from './shared/components/campo-control-erro/campo-control-erro.component';
import { CadastroUsuarioModule } from './core/pages/cadastro-usuario/cadastro-usuario.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CadastroUsuarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
