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

  verificarFigRepetidaExiste(): void {
    let numFig = Number(((document.getElementById('figInformada') as HTMLInputElement).value));
    let isValid = this._figurinhas.isNumFigValido(numFig);
    ((document.getElementById('figInformada') as HTMLInputElement).value = '');
    if(!isValid){
      alert("Número de Figurinha inválido!!");
      return;
    }
    const isFigExiste = this._figurinhas.verificarFigRepetidaExiste(numFig);
    if(isFigExiste) {
      alert("Você tem a Figurinha nº " + numFig + " repetida.");
      return;
    }
    alert("Você não tem a Figurinha de nº " + numFig + " repetida.");
  }

}
