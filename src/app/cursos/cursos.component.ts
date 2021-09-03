import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nome: string = '';
  horas: number = 0;
  valor: number = 0;

  @Output() ultimoCurso: any = new EventEmitter()

  cursos: any = [
    {nome: 'JavaScript Avançado', horas: 45, valor: 69.90},
    {nome: 'Angular', horas: 60, valor: 75},
    {nome: 'ReactJS', horas: 50, valor: 85.60},
    {nome: 'Python', horas: 65, valor: 65.50},
  ]


  addCurso(){
    
    const curso: any = {
      nome:this.nome,
      horas:this.horas,
      valor:this.valor
    }
    this.cursos.push(curso)
    this.ultimoCurso.emit({novoCurso: curso})
    this.limparCampos()

  }

  limparCampos(){
    this.nome = ''
    this.horas = 0
    this.valor = 0
  }
 

  constructor() { }

  ngOnInit(): void {
  }

}
