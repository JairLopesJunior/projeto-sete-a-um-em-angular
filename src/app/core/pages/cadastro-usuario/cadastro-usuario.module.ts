import { CampoControlErroModule } from './../../../shared/components/campo-control-erro/campo-control-erro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroUsuarioComponent } from './cadastro-usuario.component';

@NgModule({
  declarations: [
    CadastroUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CampoControlErroModule
  ],
  exports: [CadastroUsuarioComponent],
})
export class CadastroUsuarioModule { }
