import { AlbumModule } from './album/album.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioModule } from './cadastro-usuario/cadastro-usuario.module';
import { AlbumComponent } from './album/album.component';
import { RepetidasModule } from './repetidas/repetidas.module';




@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    CadastroUsuarioModule,
    AlbumModule,
    RepetidasModule,
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