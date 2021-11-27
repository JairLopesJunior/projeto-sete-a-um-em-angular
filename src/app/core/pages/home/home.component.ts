import { UsuarioService } from './../../../shared/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
              private router: Router,) { }

  ngOnInit(): void {
    const ativarRota = document.querySelector('.nav .navbar .collapse .navbar-nav .nav-item');
    console.log(ativarRota);
    const keyAlbumRetornado = localStorage.getItem('album');
    if(keyAlbumRetornado){
      this.router.navigate(['/album']);
    }
  }

  comprarAlbum() {
    const valueNomeUsuario = localStorage.getItem(this.usuarioService.nomeUsuario)!;
    localStorage.setItem('album', valueNomeUsuario);
    alert("Álbum adquirido com sucesso :D");
    this.router.navigate(['/album']);
  }

}
