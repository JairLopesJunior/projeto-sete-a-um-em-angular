import { UsuarioService } from './../../../shared/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  cadastroUsuario: FormGroup;
  private readonly _notifierService: NotifierService;

  constructor(private fb: FormBuilder,
              private router: Router,
              notifierService: NotifierService) {
    this._notifierService = notifierService;
  }

  get nome() {
    return this.cadastroUsuario.get('nome')?.value;
  }

  get senha() {
    return this.cadastroUsuario.get('senha')?.value;
  }

  ngOnInit(): void {
    this.formularioUsuario();
  }

  onSubmit() {
    if(this.cadastroUsuario){
      const keyRetornada = localStorage.getItem(this.nome);
      const isIgual = keyRetornada !== null;
      isIgual ? this._notifierService.notify('error', 'Já existe um usuário com este nome!!')
              : ( localStorage.setItem('login', JSON.stringify([this.nome, this.senha])),
                  this._notifierService.notify('success', 'Dados salvos com sucesso!!'),
                  this.router.navigate(['/home']) );
    }
  }

  verificaValidTouched(campo: string) {
    return !this.cadastroUsuario.get(campo)?.valid 
    && this.cadastroUsuario.get(campo)?.touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  formularioUsuario(): void {
    this.cadastroUsuario = this.fb.group({
      nome: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(2)
        ])
      ],
      senha: ['', Validators.compose([
        Validators.required,
        ])
      ],
    });
  }

}
