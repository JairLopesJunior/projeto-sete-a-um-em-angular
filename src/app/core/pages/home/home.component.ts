import { UsuarioService } from './../../../shared/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  keyAlbumRetornado = localStorage.getItem('album');
  private readonly _notifierService: NotifierService;

  constructor(private usuarioService: UsuarioService,
              private router: Router,
              notifierService: NotifierService) {
    this._notifierService = notifierService;
  }

  ngOnInit(): void {
    this.keyAlbumRetornado = localStorage.getItem('album');
    if(this.keyAlbumRetornado){
      this.router.navigate(['/album']);
    }
  }

  comprarAlbum() {
    if(this.usuarioService.nome === '') {
      this._notifierService.notify('error', 'Por favor faça o cadastro!!');
      return;
    }
    const valueNomeUsuario = localStorage.getItem(this.usuarioService.nomeUsuario)!;
    localStorage.setItem('album', valueNomeUsuario);
    this._notifierService.notify('success', 'Álbum adquirido com sucesso :D');
    this.router.navigate(['/album']);
  }

}
