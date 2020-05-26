import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContenidoService } from '../../services/contenido.service';
import { Quiz} from 'src/app/Models/Contenido';

@Component({
  selector: 'app-crudquiz',
  templateUrl: './crudquiz.component.html',
  styleUrls: ['./crudquiz.component.css']
})
export class CrudquizComponent implements OnInit {
  constructor(private contenidoService: ContenidoService, private router:Router) {}
  public quizz: Quiz;
  ngOnInit() {
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

  
  deleteQuiz(id:string){
    // console.log(id);
    this.contenidoService.deletequiz(id)
    .subscribe(res =>{
      alert("eliminado");
      this.getListquizz();
        },
    error => console.log(error)
    )
  }
  
  // delete(quizz:Quiz){
  //   this.contenidoService.deletecategoriaquiz(quizz)
  //   .subscribe(data=>{
  //     this.quizz=this.quizz.filter(p=>p!==quizz);
  //     //this.getcategoria();  REFRESCAR PAGINA,  
  //      alert("eliminado.... DELETE");
  //   })
  // }
  
  actualizar(quiz:Quiz):void{
    localStorage.setItem("id",quiz.idQuiz.toString());
    this.router.navigate(['/quiz/actualizar']);
    
  }
  editar(quiz:Quiz){
    localStorage.setItem("id",quiz.idQuiz.toString());
    this.router.navigate(['/quiz/actualizar']);
  }
  

  
}
