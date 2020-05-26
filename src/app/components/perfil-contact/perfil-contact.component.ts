import { Component, OnInit } from '@angular/core';
import {PerfilService} from '../../services/perfil.service';
import { Usuarios, Misesion, Persona, Todos, Misesionn } from 'src/app/Models/Perfil';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-contact',
  templateUrl: './perfil-contact.component.html',
  styleUrls: ['./perfil-contact.component.css']
})
export class PerfContactComponent implements OnInit {

  perfilPrinc: Misesion = new Misesion();
  usuario: Usuarios = new Usuarios();
  iden: any;

  constructor(private perfilService: PerfilService, private router:Router, private _route: ActivatedRoute) {
    this.iden = this._route.snapshot.paramMap.get('id');
    //console.log(this.iden);
    this.getMiperfil();
   }

  ngOnInit(): void {
  }

  getMiperfil(){
    this.perfilService.getMiSesion(parseInt(this.iden))
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

}
