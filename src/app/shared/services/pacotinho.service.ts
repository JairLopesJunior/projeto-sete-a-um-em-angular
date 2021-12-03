import { LocalstorageService } from './localstorage.service';
import { Figurinhas } from './../classes/figurinhas';
import { FigurinhaService } from './figurinha.service';
import { Injectable } from '@angular/core';
import { Pacotinho } from '../classes/pacotinho';
import { Figurinha } from '../classes/figurinha';

@Injectable({
  providedIn: 'root'
})
export class PacotinhoService {

  constructor(private _classFigurinha: FigurinhaService,
              private _localStorage: LocalstorageService) { }

  get pacotinho() {
    const classPacotinho = new Pacotinho();
    let fig1: Figurinha = this._classFigurinha.getFigurinha;
    let fig2: Figurinha = this._classFigurinha.getFigurinha;
    let fig3: Figurinha = this._classFigurinha.getFigurinha;
    let fig4: Figurinha = this._classFigurinha.getFigurinha;
    let fig5: Figurinha = this._classFigurinha.getFigurinha;
    classPacotinho.figurinhas = [fig1, fig2, fig3, fig4, fig5];
    return classPacotinho;
  }

  setLocalStorage(numeroFigurinhas: Figurinha[]) {
    let minhasFigs = this._localStorage.getMinhasFigObj();
    minhasFigs.figurinhas = minhasFigs.figurinhas.concat(numeroFigurinhas);
    const pString = JSON.stringify(minhasFigs); // Convertendo de Objeto para String
    localStorage.setItem('minhasFigs', pString); 
  }

  /*private setFigurinhasRepetidas(pFigurinhas: Figurinha[], todasFigurinhasObj: Figurinhas) {
    let i = 0;
    todasFigurinhasObj.figurinhas.map((figurinhas) => {
      i++;
      pFigurinhas.map((pFig) => {

        if(figurinhas.numero === pFig.numero) {
          pFigurinhas.splice(i);

          this.repetidas = this.repetidas!.concat(JSON.stringify(figurinhas));
          localStorage.setItem('figurinhasRepetidas', this.repetidas);
        }
      })
    });

    return todasFigurinhasObj;
  }*/

  /*private criarFigurinhasObtidasLocalStorageCasoNaoExista() {
    if(this.obtidas === null) {
      localStorage.setItem('figurinhasObtidas', '');
    }
  }

  private criarFigurinhasRepetidasLocalStorageCasoNaoExista() {
    if(this.repetidas === null) {
      localStorage.setItem('figurinhasRepetidas', '');
    }
  }*/

  private converterObjString(obj: Figurinhas): string {
    return JSON.stringify(obj);
  }

  /*private verificarRepetidasNoPacotinho(figurinhas: Figurinha[]) {
    let figObtidas: Figurinha[] = [];
    let figRepetidas: Figurinha[] = []
    let figurinhasOrdenadas = figurinhas.slice().sort(); // Ordenando o array. 
    for (var i = 0; i < figurinhasOrdenadas.length - 1; i++) {
      if (figurinhasOrdenadas[i + 1] == figurinhasOrdenadas[i]) {
        figRepetidas.push(figurinhasOrdenadas[i]);
      }else{
        figObtidas.push(figurinhasOrdenadas[i]);
      }
    }
    this._localStorage.setFigurinhasRepetidas(figRepetidas);
    this._localStorage.setFigurinhasObtidas(figObtidas);
  }*/
}
