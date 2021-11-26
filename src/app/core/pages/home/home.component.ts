import { UsuarioService } from './../../../shared/services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  comprarAlbum() {
    const keyAlbumRetornado = localStorage.getItem('album');
    const valueNomeUsuario = localStorage.getItem(this.usuarioService.nomeUsuario)!;
    if(!keyAlbumRetornado){
      localStorage.setItem('album', valueNomeUsuario);
      alert("Álbum adquirido com sucesso :D");
      return;
    }
  }
}
