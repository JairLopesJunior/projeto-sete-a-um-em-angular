import { Figurinhas } from './../classes/figurinhas';
import { FigurinhaService } from './figurinha.service';
import { Injectable } from '@angular/core';
import { Pacotinho } from '../classes/pacotinho';
import { Figurinha } from '../classes/figurinha';

@Injectable({
  providedIn: 'root'
})
export class PacotinhoService {

  figurinhas = new Figurinhas();

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

  setLocalStorage(pacotinhoObtido: Pacotinho) {
    const pacotinho = pacotinhoObtido;
    const pFigurinhas = pacotinho.figurinhas;
    let figurinhasRetornadas = this.verificarSeExisteFigurinhas();
    if(figurinhasRetornadas === null){
      this.figurinhas.figurinhas = pFigurinhas;
      const pString = this.converterObjString(this.figurinhas); // Convertendo de Objeto para String
      localStorage.setItem('figurinhasObtidas', pString); 
      return;
    }
    let todasFigurinhasObj: Figurinhas = this.converterStringObj(figurinhasRetornadas);
    todasFigurinhasObj.figurinhas = todasFigurinhasObj.figurinhas.concat(pFigurinhas);
    const pString = this.converterObjString(todasFigurinhasObj); // Convertendo de Objeto para String
    localStorage.setItem('figurinhasObtidas', pString); 
  }

  converterObjString(obj: Figurinhas): string {
    return JSON.stringify(obj);
  }

  converterStringObj(str: string): Figurinhas {
    return JSON.parse(str);
  }

  verificarSeExisteFigurinhas(): string {
    const todasFigurinhas = localStorage.getItem('figurinhasObtidas') as string;
    return todasFigurinhas;
  }
}
