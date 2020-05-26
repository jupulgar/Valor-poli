import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from '../../services/perfil.service';
import { Usuarios, Misesion, Persona, Todos, Misesionn } from 'src/app/Models/Perfil';

@Component({
  selector: 'app-perfil-act',
  templateUrl: './perfil-act.component.html',
  styleUrls: ['./perfil-act.component.css']
})
export class PerfilActComponent implements OnInit {

  perfil: Misesion = new Misesion();
  usuario: Usuarios = new Usuarios();
  

  constructor(private perfilService: PerfilService, private router: Router) {
    this.getMiperfil();
    this.getAmigos();
  }
  ngOnInit(): void {
  }

  getMiperfil() {
    this.perfilService.getMiSesion(5)
      .subscribe(
        data => {
          this.perfil = data;
          console.log(this.perfil);
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
  actualizar(info:Misesion){
    this.perfilService.updateCategoria(info)
    .subscribe(data=>{
      this.perfil=data;
      console.log(this.perfil);
      alert("se actualizo");
      this.router.navigate(['me']);
    })
  }

}
