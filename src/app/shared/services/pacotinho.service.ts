import { FigurinhaService } from './figurinha.service';
import { Injectable } from '@angular/core';
import { Pacotinho } from '../classes/pacotinho';
import { Figurinha } from '../classes/figurinha';

@Injectable({
  providedIn: 'root'
})
export class PacotinhoService {

  constructor(private classFigurinha: FigurinhaService) { }

  get pacotinho() {
    const classPacotinho = new Pacotinho();
    let fig1: Figurinha = this.classFigurinha.getFigurinha;
    let fig2: Figurinha = this.classFigurinha.getFigurinha;
    let fig3: Figurinha = this.classFigurinha.getFigurinha;
    let fig4: Figurinha = this.classFigurinha.getFigurinha;
    let fig5: Figurinha = this.classFigurinha.getFigurinha;
    classPacotinho.figurinhas = [fig1, fig2, fig3, fig4, fig5];
    return classPacotinho;
  }
}
