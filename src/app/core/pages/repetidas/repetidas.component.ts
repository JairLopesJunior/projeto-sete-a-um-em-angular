import { FigurinhaService } from './../../../shared/services/figurinha.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repetidas',
  templateUrl: './repetidas.component.html',
  styleUrls: ['./repetidas.component.css']
})
export class RepetidasComponent implements OnInit {

  repetidas: number[] | undefined = [];
  numFigsRepetidas: number;

  constructor(private _figurinhas: FigurinhaService) { }

  ngOnInit(): void {
    this.repetidas = this._figurinhas.obterFigRepetidas();
    this.numFigsRepetidas = this._figurinhas.obterFigRepetidas().length;
  }

  verificarFigExiste(): void {
    let numFig = Number(((document.getElementById('figInformada') as HTMLInputElement).value));
    let isValid = this._figurinhas.isNumFigValido(numFig);
    ((document.getElementById('figInformada') as HTMLInputElement).value = '');
    if(!isValid){
      alert("Número de Figurinha inválido!!");
      return;
    }
    const isFigExiste = this._figurinhas.verificarFigExiste(numFig);
    if(isFigExiste) {
      alert("Você já possui a Figurinha de nº " + numFig);
      return;
    }
    alert("Você não possui a Figurinha de nº " + numFig);
  }

}
