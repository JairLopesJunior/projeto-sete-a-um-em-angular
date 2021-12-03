import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  nomeUsuario = '';
  senhaUsuario = '';

  get nome() {
    let login = localStorage.getItem('login') as string;
    let loginArray = JSON.parse(login);
    return loginArray[0];
  }

  get senha() {
    return this.senhaUsuario;
  }

  set nome(nome: any) {
    this.nomeUsuario = nome;
  }

  set senha(senha: any) {
    this.senhaUsuario = senha;
  }

  constructor() { }


}
