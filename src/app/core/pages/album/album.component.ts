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

  constructor(private pService: PacotinhoService,
              private _localstorageService: LocalstorageService,
              private _figurinhas: FigurinhaService) { }

  ngOnInit(): void {
    this.todasFigurinhas = this._localstorageService.getLocalStorage('minhasFigs');
  }
  
  comprarPacotinho() {
    const pacotinho = this.pService.pacotinho;
    const numeroFigurinhas: Figurinha[] = pacotinho.figurinhas;
    this.pService.setLocalStorage(numeroFigurinhas);
    alert("Pacotinho adquirido com sucesso, contendo as seguintes figurinhas: " + Object.values(numeroFigurinhas.map(fig => fig.numero)));
    this.todasFigurinhas = this._figurinhas.obterMinhasFigs();
  }
}
