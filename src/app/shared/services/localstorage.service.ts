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
}
