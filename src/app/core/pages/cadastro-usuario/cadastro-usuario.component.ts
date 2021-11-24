import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  cadastroUsuario: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formularioUsuario();
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
