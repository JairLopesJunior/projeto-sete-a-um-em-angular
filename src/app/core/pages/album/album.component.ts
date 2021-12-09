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

  constructor(private pService: PacotinhoService,
              private _figurinhas: FigurinhaService,
              private _usuarioService: UsuarioService,
              private _figurinha: FigurinhaService) { }

  ngOnInit(): void {
    this.todasFigurinhas = this._figurinhas.obterMinhasFigs();
    this.nome = this._usuarioService.nome;
  }
  
  comprarPacotinho() {
    const pacotinho = this.pService.pacotinho;
    const numeroFigurinhas: Figurinha[] = pacotinho.figurinhas;
    this.pService.setLocalStorage(numeroFigurinhas);
    alert("Pacotinho adquirido com sucesso, contendo as seguintes figurinhas: " + Object.values(numeroFigurinhas.map(fig => fig.numero)));
    this.todasFigurinhas = this._figurinhas.obterMinhasFigs();
  }

  colarFigurinha() {
    let numFig = Number(((document.getElementById('numFig') as HTMLInputElement).value));
    let isValid = this.isNumFigValido(numFig);
    ((document.getElementById('numFig') as HTMLInputElement).value = '');
    if(!isValid){
      alert("Número de Figurinha inválido!!");
      return;
    }
    this._figurinha.colarFigurinha(numFig);
    this.todasFigurinhas = this._figurinhas.obterMinhasFigs();
  }

  verificarFigExiste() {
    let numFig = Number(((document.getElementById('figInformada') as HTMLInputElement).value));
    let isValid = this.isNumFigValido(numFig);
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

  private isNumFigValido(numFig: number): boolean {
    if(numFig <= 0 || numFig > 681){
      return false;
    }
    return true;
  }
}
