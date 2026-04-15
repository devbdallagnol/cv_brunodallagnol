import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  template: `
    <div class="hello">
      <h2>Seja Bem vindo</h2>
      <p>Aqui você pode acompanhar minhas habilidades e projetos realizados.</p>
    </div>
  `,
  styles: [`
    .hello {
      padding: 20px;
      margin: 20px 0;
      background-color: #f0f0f0;
      border-radius: 8px;
    }
  `]
})
export class HelloComponent {}