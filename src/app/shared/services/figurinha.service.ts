import { Figurinha } from './../classes/figurinha';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FigurinhaService {

  constructor() { }

  get getFigurinha() {
    let figurinha = Math.ceil(Math.random() * 681);
    const classFigurinha = new Figurinha();
    classFigurinha.numero = figurinha;
    return classFigurinha;
  }

}
