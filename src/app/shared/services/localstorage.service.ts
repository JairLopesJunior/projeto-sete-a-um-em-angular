import { Figurinhas } from './../classes/figurinhas';
import { Injectable } from '@angular/core';
import { Figurinha } from '../classes/figurinha';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  getLocalStorage(chave: string) {
    const todasFig = localStorage.getItem(chave);
    if(todasFig === null) return;
    const objTodasFig: Figurinhas = JSON.parse(todasFig);
    const figurinhas: Figurinha[] = objTodasFig.figurinhas;
    const numFig = figurinhas
                  .map((fig) => fig.numero)
                  .sort(function(a, b) {
                    return a - b;
                  });
    return numFig;
  }

  getMinhasFigStr(): string {
    let minhasFig = localStorage.getItem('minhasFigs');
    return minhasFig as string;
  }

  getMinhasFigObj(): Figurinhas {
    let minhasFig = localStorage.getItem('minhasFigs') as string;
    if(minhasFig === null) {
      let figurinhas = new Figurinhas();
      figurinhas.figurinhas = [];
      localStorage.setItem('minhasFigs', JSON.stringify(figurinhas));
      let minhasFig = localStorage.getItem('minhasFigs') as string;
      return JSON.parse(minhasFig);
    }
    let minhasFigObj: Figurinhas = JSON.parse(minhasFig);
    return minhasFigObj;
  }

  setMinhasFigObj(figurinhas: Figurinha[]) {
    let minhasFig = this.getMinhasFigObj();
    minhasFig.figurinhas = minhasFig.figurinhas.concat(figurinhas);
    localStorage.setItem('minhasFigs', JSON.stringify(minhasFig));
  }

  setMinhasFigStr(figurinhas: string) {
    let minhasFig = this.getMinhasFigStr();
    let minhasFigObj: Figurinhas = JSON.parse(minhasFig);
    minhasFigObj.figurinhas = minhasFigObj.figurinhas.concat(JSON.parse(figurinhas));
    localStorage.setItem('minhasFigs', JSON.stringify(minhasFigObj));
  }
}
