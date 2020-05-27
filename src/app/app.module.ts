import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationComponent } from './components/navegation/navegation.component';
import { ContenidoAddComponent } from './components/contenido-add/contenido-add.component';
import { ContenidoListComponent } from './components/contenido-list/contenido-list.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContenidoBodyComponent } from './components/contenido-body/contenido-body.component';

import { ContenidoService} from './services/contenido.service';
import { ServiceService} from './components/inicio/service.service';

import { PaginaprincipalComponent } from './prueba/paginaprincipal/paginaprincipal.component';
import { CrudquizComponent } from './components/crudquiz/crudquiz.component';
import { CrearComponent } from './components/crudquiz/crear/crear.component';
import { CrudpreguntaComponent } from './components/crudpregunta/crudpregunta.component';
import { ActualizarComponent } from './components/crudquiz/actualizar/actualizar.component';
import { PerfContactComponent } from './components/perfil-contact/perfil-contact.component';
import { PrincipioComponent } from './components/principio/principio.component';
// import { GustosComponent } from './components/gustos/gustos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PerfilActComponent } from './components/perfil-act/perfil-act.component';
import { PerfilListComponent } from './components/perfil-list/perfil-list.component';
import { CrearpComponent } from './components/crudpregunta/crearp/crearp.component';





@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    ContenidoAddComponent,
    ContenidoListComponent,
    ContenidoBodyComponent,
    InicioComponent,
    PaginaprincipalComponent,
    CrudquizComponent,
    CrearComponent,
    CrudpreguntaComponent,
    ActualizarComponent,
    PerfContactComponent,
    PrincipioComponent,
    // GustosComponent,
    PerfilComponent,
    PerfilActComponent,
    PerfilListComponent,
    CrearpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ContenidoService,
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
