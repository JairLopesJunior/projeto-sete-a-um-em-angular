import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { RepetidasComponent } from '../core/pages/repetidas/repetidas.component';
import { HomeComponent } from './../core/pages/home/home.component';
import { CadastroUsuarioComponent } from './../core/pages/cadastro-usuario/cadastro-usuario.component';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: 'home', component: HomeComponent
      },
      {
        path: 'repetidas', component: RepetidasComponent
      },
      {
          path: '', component: CadastroUsuarioComponent
      },
      {
          path: 'cadastro', component: CadastroUsuarioComponent
      },
    ])
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }