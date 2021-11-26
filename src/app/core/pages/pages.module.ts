import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioModule } from './cadastro-usuario/cadastro-usuario.module';
import { AlbumComponent } from './album/album.component';




@NgModule({
  declarations: [
    HomeComponent,
    AlbumComponent
  ],
  imports: [
    CommonModule,
    CadastroUsuarioModule,
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