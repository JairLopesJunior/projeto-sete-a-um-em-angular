import { Figurinhas } from './../classes/figurinhas';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  getLocalStorage(chave: string) {
    const todasFig = localStorage.getItem(chave);
    if(todasFig === null) return;
    const objTodasFig: Figurinhas = JSON.parse(todasFig);
    const arrayTodasFig = Object.keys(objTodasFig.figurinhas);
    return arrayTodasFig;
  }
}
