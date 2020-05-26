import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Categoria, Categoriaa, Quiz, Pregunta} from '../Models/Contenido';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContenidoService {
  

  constructor(private http: HttpClient) { }
  quizz: Observable<any>;
  pregunta: Observable<any>;
  private api = 'http://localhost:8080/api' ;

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });
   //Crud quiz
  getAllquiz() {
    const path = `${this.api}/quiz/lista/`;
    return this.http.get<Quiz>(path);
  }

  deletequiz(id:string){
    const path = `${this.api}/quiz/${id}`;
    return this.http.delete<Quiz>(path);
  }
  savequiz(quiz:Quiz){
    const path = `${this.api}/quiz`;
    return this.http.post(path,quiz);
  }

  deleteQuiz(id: Number){
    const path = `${this.api}/quiz/lista/${id}`;
    return this.http.delete(path);
  }


  createquiz(quiz:Quiz){
    const path = `${this.api}/quiz/crear`;
    return this.http.post(path,quiz);
  }


  addQuiz(id: any) {
    let json = JSON.stringify(id);
    let headers = new HttpHeaders().set('content-Type', 'application/json');
    return this.http.post("http://localhost:8080/api/quiz", json ,{ headers : headers});
  }
  gettodosquiz(): Observable<any> {
    const path = `${this.api}/quiz/lista/`;
    return this.http.get(path);
  }
  getpregunta(): Observable<any> {
    return this.http.get('http://localhost:8080/api/pregunta/lista')
    //  this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
  
  getquizid(id:number){//obtener campos a mostrar ebn la vista pero no la hay
    const path = `${this.api}/quiz/${id}`;
    return this.http.get<Quiz>(path);
  }
  getQuizid(id:number){//obtener campos a mostrar ebn la vista pero no la hay
    return this.http.get<Quiz>('http://localhost:8080/api/quiz/{id}?id='+ id);
  }
  updatequiz(quiz:Quiz){
    return this.http.put<Quiz>('http://localhost:8080/api/quiz/actualizar/'+ quiz.idQuiz,quiz);
  }
  


  //Pregunta

  getAllpregunta() {
    const path = `${this.api}/pregunta/lista/`;
    return this.http.get<Pregunta>(path);
  }

  gettodospre(): Observable<any> {
    const path = `${this.api}/pregunta/lista/`;
    return this.http.get(path);
  }










  //Obtener contenido list
  GetCategoria(): Observable<any>  {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  
  gettodos(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }

  

  addCategoria(id: any) {
    let json = JSON.stringify(id);
    let headers = new HttpHeaders().set('content-Type', 'application/json');
    return this.http.post("https://jsonplaceholder.typicode.com/users", json ,{ headers : headers});
  }

  /*unaCategoria(id: String){
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id);
  }*/

  /*deleteCategoria(id: string) {
    return this.http.delete('https://jsonplaceholder.typicode.com/users'+ id);
  }*/

  createCategoria(categoria:Categoria){
    return this.http.post<Categoria>('https://jsonplaceholder.typicode.com/users/', categoria);
  }


  /*uptadeCategoria(id: String, uptadeCategoria: Categoria, completed: String ): Observable<any> {
    return this.http.put('${this.API_URI}/posts/${id}',uptadeCategoria);

  } */
  deletecategoriaquiz(quizz:Quiz){
    return this.http.delete<Quiz>('http://localhost:8080/api/quiz/'+ quizz.idQuiz);
  }
  deletecategoria(categoria:Categoria){
    return this.http.delete<Categoria>('https://jsonplaceholder.typicode.com/users/'+ categoria.id);
  }

  /*getCategoriaid(id:number){//obtener campos a mostrar ebn la vista pero no la hay
    return this.http.get<Categoria>('https://jsonplaceholder.typicode.com/users/'+ id);
  }*/
  getCategoriaid(id:number){//obtener campos a mostrar ebn la vista pero no la hay
    return this.http.get<Categoriaa>('https://jsonplaceholder.typicode.com/users/'+ id);
  }
  /*updateCategoria(categoria:Categoria){
    return this.http.put<Categoria>('https://jsonplaceholder.typicode.com/users/'+ categoria.id,categoria);
  }*/
  updateCategoria2(id: String|number, categoria:Categoria){
    return this.http.put<Categoria>('https://jsonplaceholder.typicode.com/users/'+ categoria.id,categoria);
  }

  updateCategoria(categoriaa:Categoriaa){
    return this.http.put<Categoriaa>('https://jsonplaceholder.typicode.com/users/'+ categoriaa.id,categoriaa);
  }
}
