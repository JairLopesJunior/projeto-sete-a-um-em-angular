import { CardModule } from './../../../shared/components/card/card.module';
import { AlbumComponent } from './album.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AlbumComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [
    AlbumComponent
  ]
})
export class AlbumModule { }