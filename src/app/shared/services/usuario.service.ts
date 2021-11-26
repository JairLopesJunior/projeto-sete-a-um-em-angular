import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  nomeUsuario = '';
  senhaUsuario = '';

  get nome() {
    return this.nomeUsuario;
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
