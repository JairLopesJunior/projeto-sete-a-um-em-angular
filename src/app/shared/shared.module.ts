import { HomeComponent } from './../core/pages/home/home.component';
import { CadastroUsuarioComponent } from './../core/pages/cadastro-usuario/cadastro-usuario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: '', component: HomeComponent
      },
      {
          path: 'home', component: HomeComponent
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