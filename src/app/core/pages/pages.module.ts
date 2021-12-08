import { AlbumModule } from './album/album.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioModule } from './cadastro-usuario/cadastro-usuario.module';
import { AlbumComponent } from './album/album.component';
import { RepetidasComponent } from './repetidas/repetidas.component';




@NgModule({
  declarations: [
    HomeComponent,
    RepetidasComponent,
  ],
  imports: [
    CommonModule,
    CadastroUsuarioModule,
    AlbumModule,
    RouterModule.forChild([
      {
          path: 'album', component: AlbumComponent
      },
    ])
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }