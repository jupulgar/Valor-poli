import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Usuarios, Misesion, Persona, Todos, Misesionn, logUsu} from 'src/app/Models/Perfil';
import { Router} from '@angular/router';
import {PerfilService} from '../../services/perfil.service';

@Component({
  selector: 'app-principio',
  templateUrl: './principio.component.html',
  styleUrls: ['./principio.component.css']
})
export class PrincipioComponent implements OnInit {
  todos:Persona[];
  todos2: Usuarios[];
  perfil: Misesion = new Misesion();
  perfil2: Misesionn[];
  peel:Todos[];
  validLogin: logUsu = new logUsu();

  newUsr: Persona = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: '',
    phone: '',
    companyname: ''
  };

  constructor(private perfilService: PerfilService, private router:Router) { }

  ngOnInit(): void {
  }

  registro(cosa){
    delete cosa.id;

    this.perfilService.regitrarPersona(cosa)
    .subscribe(
      resultado => {
        console.log(resultado);
        alert("Usuario insertado");
        this.router.navigate(['contenido/inicio']);

    }, 
    error => console.error(error)
    )
  }

  Login(){
    this.router.navigate(['contenido/inicio']); 
  }

}
