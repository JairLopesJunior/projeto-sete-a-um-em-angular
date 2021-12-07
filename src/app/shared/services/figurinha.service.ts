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
    const numFigsOrdenadas = minhasFigsSemRepeticao.sort(function(a, b) {
                                            return a - b;
                                          });
    return numFigsOrdenadas;
  }

  colarFigurinha(fig: number) {
    const isFigExiste = this.verificarFigExiste(fig);
    if(isFigExiste) {
      alert("A Figurinha nº " + fig + " já existe no seu Álbum.");
      return;
    }
    let minhasFigs: Figurinhas = this._localStorage.getMinhasFigObj();
    const minhaFig = new Figurinha();
    minhaFig.numero = fig;
    minhasFigs.figurinhas.push(minhaFig);
    this._localStorage.setMinhasFigObj(minhasFigs.figurinhas);
    alert("A Figurinha nº " + fig + " foi colada com sucesso!!");
  }

  private verificarFigExiste(fig: number): boolean {
    let minhasFigs = this.obterMinhasFigs();
    return minhasFigs.includes(fig);
  }
}
