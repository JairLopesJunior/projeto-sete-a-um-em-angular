import { Figurinhas } from './../classes/figurinhas';
import { LocalstorageService } from './localstorage.service';
import { Figurinha } from './../classes/figurinha';
import { Injectable } from '@angular/core';
import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class FigurinhaService {

  constructor(private _localStorage: LocalstorageService) { }

  get getFigurinha() {
    let figurinha = Math.ceil(Math.random() * 681);
    const classFigurinha = new Figurinha();
    classFigurinha.numero = figurinha;
    return classFigurinha;
  }

  obterMinhasFigs(): number[] {
    let minhasFigs: Figurinhas = this._localStorage.getMinhasFigObj();
    console.log("ESSE " + minhasFigs)
    console.log("ESSE " + minhasFigs.figurinhas)
    let numMinhasFigs = minhasFigs.figurinhas.map((fig) => fig.numero);
    const minhasFigsSemRepeticao = [...new Set(numMinhasFigs)];
    const numFigsOrdenadas = minhasFigsSemRepeticao.sort(function(a, b) {
                                            return a - b;
                                          });
    return numFigsOrdenadas;
  }

  obterFigRepetidas(): number[] {
    let repetidas: number[] = [];
    let minhasFigs: Figurinhas = this._localStorage.getMinhasFigObj();
    let numFigs = minhasFigs.figurinhas.map((fig) => fig.numero);
    numFigs.filter(function(elemento, i) {
      if(numFigs.indexOf(elemento) !== i) {
        repetidas.push(elemento)
      }
      return numFigs.indexOf(elemento) == i;
    }) 

    const repetidasOrdenadas = repetidas.sort(function(a, b) {
      return a - b;
    });
    return repetidasOrdenadas;
  }

  colarFigurinha(fig: number): void {
    const isFigExiste = this.verificarFigExiste(fig);
    if(isFigExiste) {
      alert("A Figurinha nº " + fig + " já existe no seu Álbum.");
      return;
    }
    let minhasFigs: Figurinhas = this._localStorage.getMinhasFigObj();
    const minhaFig = new Figurinha();
    minhaFig.numero = fig;
    this._localStorage.setMinhasFigObj([minhaFig]);
    alert("A Figurinha nº " + fig + " foi colada com sucesso!!");
  }

  verificarFigExiste(fig: number): boolean {
    let minhasFigs = this.obterMinhasFigs();
    return minhasFigs.includes(fig);
  }

  verificarFigRepetidaExiste(fig: number): boolean {
    let minhasFigs = this.obterFigRepetidas();
    return minhasFigs.includes(fig);
  }

  obterQtdMinhasFigs(): number {
    let qtdMinhasFigs = this._localStorage.getMinhasFigObj();
    let numFigs = qtdMinhasFigs.figurinhas.map((fig) => fig.numero);
    let qtdFigRepetidas = this.obterFigRepetidas().length;
    return (numFigs.length - qtdFigRepetidas);
  }

  isNumFigValido(numFig: number): boolean {
    if(numFig <= 0 || numFig > 681){
      return false;
    }
    return true;
  }

  removerFigRepetida(figRepetida: number): Figurinha[] {
    let minhasFigs = this._localStorage.getMinhasFigObj();
    let figs = minhasFigs.figurinhas.map((fig) => fig.numero); 
    let numIndice = figs.indexOf(figRepetida);
    minhasFigs.figurinhas.splice(numIndice, 1);
    return minhasFigs.figurinhas;
  }

}


