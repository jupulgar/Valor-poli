import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContenidoService } from 'src/app/services/contenido.service';
import { Quiz} from 'src/app/Models/Contenido';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  quiz :Quiz = new Quiz();
  constructor(private router: Router,private contenidoService: ContenidoService) { }

  ngOnInit(): void {
    this.editar();
  }

  editar(){
    let id =localStorage.getItem("id");
    this.contenidoService.getQuizid(+id)
    .subscribe(data=>{
      this.quiz=data;
      
    })
  }
  actualizar(quiz:Quiz){
    this.contenidoService.updatequiz(quiz)
    .subscribe(data=>{
      this.quiz=data;
      console.log(this.quiz);
      alert("se actualizo");
      this.router.navigate(['contenido/quiz']);
    })
  }

 

}
