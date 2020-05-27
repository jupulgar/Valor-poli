import { Component, OnInit,HostBinding } from '@angular/core';
import { Quiz,Pregunta } from 'src/app/Models/Contenido';
import { ActivatedRoute,Router} from '@angular/router';
import { ContenidoService } from 'src/app/services/contenido.service';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  peel : Pregunta[];
  quiz: Quiz = {
    idQuiz: 0,
    descripcion: '',
    estado: 0,
    titulo: ''
  };
  constructor(private contenidoService: ContenidoService,private router:Router,private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.contenidoService.getpregunta()
    // .subscribe(data=>{
    //   this.peel=data;
      
    // })
    
    }



  // guardar():void{

  // }
  SaveQuiz(){
    // console.log(this.quiz);
    delete this.quiz.idQuiz;
    delete this.quiz.modulo_id_modulo;
    
    this.contenidoService.createquiz(this.quiz)
    .subscribe(
      resultado => {
        console.log(resultado);
        alert("contenido guardado");
        this.router.navigate(['/contenido/quiz']);
          
          
        //this.router.navigate(['/contenido/list']);
      //this.todos = resultado.todos;
     }, 
    error => console.error(error)
    )
  }
    


}
