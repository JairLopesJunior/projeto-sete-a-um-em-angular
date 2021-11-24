import { CampoControlErroModule } from './shared/components/campo-control-erro/campo-control-erro.module';
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
    CadastroUsuarioModule,
    CampoControlErroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
