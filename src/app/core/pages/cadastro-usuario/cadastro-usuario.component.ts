import { UsuarioService } from './../../../shared/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  cadastroUsuario: FormGroup;

  constructor(private fb: FormBuilder,
              private usuarioService: UsuarioService) { }

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
      isIgual ? alert("Já existe um usuário com este nome!!")
              : ( localStorage.setItem(this.nome, this.senha),
                  this.usuarioService.nome = this.nome,
                  this.usuarioService.senha = this.senha,
                  alert("Dados salvos com sucesso!!") );
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
