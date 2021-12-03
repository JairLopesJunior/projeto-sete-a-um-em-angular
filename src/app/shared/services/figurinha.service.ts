import { Figurinhas } from './../classes/figurinhas';
import { LocalstorageService } from './localstorage.service';
import { Figurinha } from './../classes/figurinha';
import { Injectable } from '@angular/core';

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
    let numMinhasFigs = minhasFigs.figurinhas.map((fig) => fig.numero);
    const minhasFigsSemRepeticao = [...new Set(numMinhasFigs)];
    console.log(minhasFigsSemRepeticao);
    const numFigsOrdenadas = minhasFigsSemRepeticao.sort(function(a, b) {
                                            return a - b;
                                          });
    console.log(numFigsOrdenadas)
    return numFigsOrdenadas;
  }

}
