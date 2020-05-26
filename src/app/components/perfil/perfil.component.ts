import { Component, OnInit } from '@angular/core';
import {PerfilListComponent} from '../perfil-list/perfil-list.component';
import {PerfilActComponent} from '../perfil-act/perfil-act.component';
import {PerfilService} from '../../services/perfil.service';
import { Usuarios, Misesion, Persona, Todos, Misesionn } from 'src/app/Models/Perfil';
import { Router} from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfiles = [];
  show: boolean;
  opci: number;
  perfilPrinc: Misesion = new Misesion();
  usuario: Usuarios = new Usuarios();

  constructor(private perfilService: PerfilService, private router:Router) { 
    this.getMiperfil();
    this.getAmigos();
    
  }

  ngOnInit(): void {
  }

  getMiperfil(){
      this.perfilService.getMiSesion(5)
      .subscribe(
        data => {
        this.perfilPrinc=data;
       console.log(this.perfilPrinc);       
       
      // console.log(names1); 
      // var me = this;
      // me.perfil = Object.keys(me.perfil ).map(function(key) {return me.perfil [key];});
      // console.log(me.perfil[2]);
  
    },
      error => console.error(error)
      );
  }

  getAmigos(){
    this.perfilService.gettodos()
    .subscribe(
      data => {
      this.usuario=data;
     console.log(this.usuario);       
  },
    error => console.error(error)
    );

  }
  VerAmigo(id){
    // alert("Escogiste "+id);
    this.router.navigate(['usuario/'+id]); 
  }

  ActualizarPerf(id){
    // alert("Escogiste "+id);
    this.router.navigate(['me/edit/'+id]); 
  }
}
