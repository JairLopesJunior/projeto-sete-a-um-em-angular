import { LocalstorageService } from './../../../shared/services/localstorage.service';
import { PacotinhoService } from './../../../shared/services/pacotinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  
  todasFigurinhas = this._localstorageService.getLocalStorage('figurinhasObtidas');

  constructor(private pService: PacotinhoService,
                      private _localstorageService: LocalstorageService) { }

  ngOnInit(): void {
  }
  
  comprarPacotinho() {
    const pacotinho = this.pService.pacotinho;
    this.pService.setLocalStorage(pacotinho);
    const figurinhas = pacotinho.figurinhas;
    const numeroFig = figurinhas.map(fig => fig.numero);
    alert("Pacotinho adquirido com sucesso, contendo as seguintes figurinhas: " + JSON.stringify(numeroFig));
  }
}
