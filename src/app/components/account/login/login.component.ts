import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {


  //método construtor
  constructor(
    //injeção de dependência
    private ngxSpinnerService: NgxSpinnerService
  ) {
  }


  //criando a estrutura do formulário
  formLogin = new FormGroup({
    /* campo 'email' */
    email: new FormControl('', [
      Validators.required /* campo obrigatório */,
      Validators.email /* formato de email */,
    ]),
    /* campo 'senha' */
    senha: new FormControl('', [
      Validators.required /* campo obrigatório */,
      Validators.pattern(
        /* senha forte */
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),
  });


  //função para permitir o acesso aos
  //campos contidos no formulário
  get form(): any {
    //retornar os campos do formulário
    return this.formLogin.controls;
  }


  //função executada no submit do formulário
  onSubmit(): void {
    /* imprimir os campos do formulário */
    console.log(this.formLogin.value);
    //exibindo o spinner
    this.ngxSpinnerService.show();
  }
}




