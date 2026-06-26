import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-autenticar-usuario',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './autenticar-usuario.html',
  styleUrl: './autenticar-usuario.css',
})
export class AutenticarUsuario {

  //Declarar um objeto do tipo HttpClient
  // e inicializá-lo por injeção de dependência.
  private http = inject(HttpClient);

  //Objeto para capturar o formulário de autenticação do usuário.
  formAutenticar = new FormGroup({
    email: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required])
  });

  //Função para requisição da API.
  //Será executada quando o botão "submit" do formulário for clicado.
  autenticar(){
    //Enviando uma requisição HTTP POST para a API de autenticação.
    this.http.post('http://localhost:8082/api/v1/usuario/autenticar', this.formAutenticar.value)
    .subscribe({
      next : (response) => {
        console.log('Sucesso:', response);
      },
      error : (e) => {
        console.log('Erro!', e.error);
      }
    });
  }

}
