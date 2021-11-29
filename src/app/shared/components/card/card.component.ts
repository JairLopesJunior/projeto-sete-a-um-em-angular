import { Figurinha } from './../../classes/figurinha';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() figurinha: number;

  constructor() { }

  ngOnInit(): void {
  }

}
