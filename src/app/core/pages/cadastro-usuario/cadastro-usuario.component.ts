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

  onSubmit() {
    
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
