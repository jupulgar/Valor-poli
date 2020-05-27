import { Component, OnInit } from '@angular/core';
import { Pregunta,Quiz } from 'src/app/Models/Contenido';
import { ActivatedRoute,Router} from '@angular/router';
import { ContenidoService } from 'src/app/services/contenido.service';

@Component({
  selector: 'app-crearp',
  templateUrl: './crearp.component.html',
  styleUrls: ['./crearp.component.css']
})
export class CrearpComponent implements OnInit {

  pregunta: Pregunta = {
    idPregunta: 0,
    idQuiz: 0,
    tipoPregunta: "",
    titulo: ''
  };
  constructor(private contenidoService: ContenidoService,private router:Router,private activedRoute:ActivatedRoute) { }
  public quizz: Quiz;
  ngOnInit(): void {
    this.getListquiz(); 
   this.getListquizz();
  }
  getListquizz(): void {
    this.contenidoService.getAllquiz()
      .subscribe(
        res => {
          this.quizz = res;
        },
        error => console.log(error)
        );// (quizz: Quiz) => (this.quizz = quizz));
  }


  getListquiz(): void {
    this.contenidoService
      .getAllquiz()
      .subscribe((quizz: Quiz) => (this.quizz = quizz));
  }


  SavePregunta(){
     console.log(this.pregunta);
  //   delete this.pregunta.idPregunta;
    
    
  //   this.contenidoService.createpregunta(this.pregunta)
  //   .subscribe(
  //     resultado => {
  //       console.log(resultado);
  //       alert("contenido guardado");
  //       this.router.navigate(['/contenido/quiz']);
          
          
  //       //this.router.navigate(['/contenido/list']);
  //     //this.todos = resultado.todos;
  //    }, 
  //   error => console.error(error)
  //   )
  // }
  }
}
