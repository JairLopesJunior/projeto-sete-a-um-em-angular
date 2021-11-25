import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroUsuarioModule } from './cadastro-usuario/cadastro-usuario.module';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CadastroUsuarioModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }