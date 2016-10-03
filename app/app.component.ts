import { Component } from '@angular/core';

export class Pessoa {
  nome: string;
}

@Component({
  selector: 'my-app',
  templateUrl: 'app/teste.html'
})
export class AppComponent {
  title = 'Teste';
  pessoa: Pessoa = {
    nome: 'Bruno'
  };
}
