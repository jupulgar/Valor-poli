import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  carta: any;
  cartas = [];

  constructor(private Service : ServiceService) { 
    this.obtenercartas();
  }

  ngOnInit(): void {
    //this.titulo_tarj = "Prueba";
    this.Service.obtenerTodasCartas().subscribe(data=>{
      this.cartas = data;
      // console.log(this.cartas);
      
      
     })

  }

  obtenercartas(){
    this.Service.obtenerTodasCartas().subscribe(resultado=>{
      this.carta = resultado.carta;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }
  eliminarcartas(id){
    this.Service.eliminarCarta(id).subscribe(resultado=>{
      this.carta = resultado.carta;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }




}
