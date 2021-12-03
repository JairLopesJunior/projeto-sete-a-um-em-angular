import { UsuarioService } from './../../../shared/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  keyAlbumRetornado = localStorage.getItem('album');

  constructor(private usuarioService: UsuarioService,
              private router: Router,) { }

  ngOnInit(): void {
    this.keyAlbumRetornado = localStorage.getItem('album');
    if(this.keyAlbumRetornado){
      this.router.navigate(['/album']);
    }
  }

  comprarAlbum() {
    if(this.usuarioService.nome === '') {
      alert("Por favor faça o cadastro!!");
      return;
    }
    const valueNomeUsuario = localStorage.getItem(this.usuarioService.nomeUsuario)!;
    localStorage.setItem('album', valueNomeUsuario);
    alert("Álbum adquirido com sucesso :D");
    this.router.navigate(['/album']);
  }

}
