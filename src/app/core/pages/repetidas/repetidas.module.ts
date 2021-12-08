import { CardModule } from './../../../shared/components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepetidasComponent } from './repetidas.component';

@NgModule({
  declarations: [
    RepetidasComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [
    RepetidasComponent
  ]
})
export class RepetidasModule { }