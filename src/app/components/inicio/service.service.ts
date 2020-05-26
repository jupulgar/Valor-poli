import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  obtenerTodasCartas(): Observable<any>{
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }

  eliminarCarta(id): Observable<any>{
    return this.httpClient.delete("https://jsonplaceholder.typicode.com/posts/"+id);

  }
  añadirCarta(info: any){
    let json = JSON.stringify(info);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.post("https://jsonplaceholder.typicode.com/posts/", json, {headers: headers});
  }
 /* obtenerCartaEspecifica(id): Observable<any>{
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts"/+id);
  }
  modificarCarta(id):{}*/





}
