import { Figurinhas } from './../../../shared/classes/figurinhas';
import { UsuarioService } from './../../../shared/services/usuario.service';
import { FigurinhaService } from './../../../shared/services/figurinha.service';
import { Figurinha } from './../../../shared/classes/figurinha';
import { LocalstorageService } from './../../../shared/services/localstorage.service';
import { PacotinhoService } from './../../../shared/services/pacotinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  
  todasFigurinhas: number[] | undefined;
  nome: string;
  numMinhasFigs: number;

  constructor(private pService: PacotinhoService,
              private _figurinhas: FigurinhaService,
              private _usuarioService: UsuarioService,
              private _figurinha: FigurinhaService,
              private _localStorage: LocalstorageService) { }

  ngOnInit(): void {
    this.todasFigurinhas = this._figurinhas.obterMinhasFigs();
    this.nome = this._usuarioService.nome;
    this.numMinhasFigs = this._figurinhas.obterQtdMinhasFigs();
  }
  
  comprarPacotinho(): void {
    const pacotinho = this.pService.pacotinho;
    const numeroFigurinhas: Figurinha[] = pacotinho.figurinhas;
    this.pService.setLocalStorage(numeroFigurinhas);
    alert("Pacotinho adquirido com sucesso, contendo as seguintes figurinhas: " + Object.values(numeroFigurinhas.map(fig => fig.numero)));
    this.todasFigurinhas = this._figurinhas.obterMinhasFigs();
    this.numMinhasFigs = this._figurinhas.obterQtdMinhasFigs();
  }

  colarFigurinha(): void {
    let numFig = Number(((document.getElementById('numFig') as HTMLInputElement).value));
    let isValid = this._figurinhas.isNumFigValido(numFig);
    ((document.getElementById('numFig') as HTMLInputElement).value = '');
    if(!isValid){
      alert("Número de Figurinha inválido!!");
      return;
    }
    this._figurinha.colarFigurinha(numFig);
    this.todasFigurinhas = this._figurinhas.obterMinhasFigs();
  }

  trocarFigurinha() {
    let numFigRepetida = Number(((document.getElementById('numFigRepetida') as HTMLInputElement).value));
    let numFigAdquirida = Number(((document.getElementById('numFigAdquirida') as HTMLInputElement).value));
    let numFigRepetidaVerificada = this._figurinhas.isNumFigValido(numFigRepetida);
    let numFigAdquiridaVerificada = this._figurinhas.isNumFigValido(numFigAdquirida);
    ((document.getElementById('numFigRepetida') as HTMLInputElement).value = '');
    ((document.getElementById('numFigAdquirida') as HTMLInputElement).value = '');
    if(!numFigRepetidaVerificada || !numFigAdquiridaVerificada) {
      alert("Número de Figurinha inválido!!");
      return;
    }
    let figurinhasValidadas = this.validarFigurinhasTroca(numFigRepetida, numFigAdquirida);
    if(typeof figurinhasValidadas === 'undefined') return;
    const figurinha = new Figurinha();
    figurinha.numero = numFigAdquirida;
    this._localStorage.setMinhasFigObj([figurinha]);
    let figRepetidas = this._figurinhas.removerFigRepetida(numFigRepetida);
    localStorage.setItem('minhasFigs', JSON.stringify(figRepetidas));
    this.todasFigurinhas = this._figurinhas.obterMinhasFigs();
    alert("Figurinha adquirida com sucesso.");
  }

  private validarFigurinhasTroca(numFigRepetida: number, numFigAdquirida: number): void | string {
    const numFigRepetidaIsValid = this._figurinhas.verificarFigRepetidaExiste(numFigRepetida);
    const numFigAdquiridaIsValid = this._figurinhas.verificarFigExiste(numFigAdquirida);
    if(!numFigRepetidaIsValid) {
      alert("Você não possui a figurinha nº " + numFigRepetida + " para troca.");
      return;
    }
    if(numFigAdquiridaIsValid) {
      alert("Você já possui a Figurinha nº " + numFigAdquirida);
      return;
    }
    return '';
  }
}
