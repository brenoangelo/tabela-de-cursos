import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tabela de Cursos';
  novoCurso: any = ''

  onMudouCurso(evento:any){
    this.novoCurso = evento
  }
}
