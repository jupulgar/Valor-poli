import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContenidoService } from '../../services/contenido.service';
import { Pregunta,Quiz} from 'src/app/Models/Contenido';

@Component({
  selector: 'app-crudpregunta',
  templateUrl: './crudpregunta.component.html',
  styleUrls: ['./crudpregunta.component.css']
})
export class CrudpreguntaComponent implements OnInit {
  constructor(private contenidoService: ContenidoService, private router:Router) { }
  public pregunta: Pregunta;
  public quizz: Quiz;
  ngOnInit() {
    this.getListpregunta();
    this.getListquiz(); 
  }

  getListpregunta(): void {
    this.contenidoService
      .getAllpregunta()
      .subscribe((pregunta: Pregunta) => (this.pregunta = pregunta));
  }
  getListquiz(): void {
    this.contenidoService
      .getAllquiz()
      .subscribe((quizz: Quiz) => (this.quizz = quizz));
  }  
  

}
