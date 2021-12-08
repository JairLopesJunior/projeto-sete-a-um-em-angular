import { FigurinhaService } from './../../../shared/services/figurinha.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repetidas',
  templateUrl: './repetidas.component.html',
  styleUrls: ['./repetidas.component.css']
})
export class RepetidasComponent implements OnInit {

  repetidas: number[] | undefined = [];

  constructor(private _figurinhas: FigurinhaService) { }

  ngOnInit(): void {
    this.repetidas = this._figurinhas.obterFigRepetidas();
  }

}
