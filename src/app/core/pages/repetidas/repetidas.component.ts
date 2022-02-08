import { FigurinhaService } from './../../../shared/services/figurinha.service';
import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-repetidas',
  templateUrl: './repetidas.component.html',
  styleUrls: ['./repetidas.component.css']
})
export class RepetidasComponent implements OnInit {

  repetidas: number[] | undefined = [];
  numFigsRepetidas: number;
  private readonly _notifierService: NotifierService;

  constructor(private _figurinhas: FigurinhaService,
              notifierService: NotifierService) { 
    this._notifierService = notifierService;
  }

  ngOnInit(): void {
    this.repetidas = this._figurinhas.obterFigRepetidas();
    this.numFigsRepetidas = this._figurinhas.obterFigRepetidas().length;
  }

  verificarFigRepetidaExiste(): void {
    let numFig = Number(((document.getElementById('figInformada') as HTMLInputElement).value));
    let isValid = this._figurinhas.isNumFigValido(numFig);
    ((document.getElementById('figInformada') as HTMLInputElement).value = '');
    if(!isValid){
      this._notifierService.notify('error', 'Número de Figurinha inválido!!');
      return;
    }
    const isFigExiste = this._figurinhas.verificarFigRepetidaExiste(numFig);
    if(isFigExiste) {
      this._notifierService.notify('error', `Você tem a Figurinha nº ${numFig} repetida.`);
      return;
    }
    this._notifierService.notify('error', `Você não tem a Figurinha de nº ${numFig} repetida.`);
  }

}
