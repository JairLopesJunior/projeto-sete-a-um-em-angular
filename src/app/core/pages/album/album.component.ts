import { PacotinhoService } from './../../../shared/services/pacotinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(private pService: PacotinhoService) { }

  ngOnInit(): void {
  }
  
  comprarPacotinho() {
    const pacotinho = this.pService.pacotinho;
    this.pService.setLocalStorage(pacotinho);
    console.log(localStorage.getItem('pacotinho'));
  }
}
