import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenidoListComponent } from './components/contenido-list/contenido-list.component';
import { ContenidoAddComponent } from './components/contenido-add/contenido-add.component';
import { ContenidoBodyComponent } from './components/contenido-body/contenido-body.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PaginaprincipalComponent } from './prueba/paginaprincipal/paginaprincipal.component';
import { CrudquizComponent } from './components/crudquiz/crudquiz.component';
import { CrearComponent} from './components/crudquiz/crear/crear.component';
import { CrudpreguntaComponent} from './components/crudpregunta/crudpregunta.component';
import { ActualizarComponent} from './components/crudquiz/actualizar/actualizar.component';
//import { NavegationComponent } from './components/navegation/navegation.component';
const routes: Routes = [
    {
      path: '',
<<<<<<< Updated upstream
      redirectTo: '/contenido/inicio',
      pathMatch: 'full'
    },
    {
=======
      redirectTo: 'principal',
      pathMatch: 'full'
    },
    {
      path:'principal',
      component: PrincipioComponent
    },
    {
>>>>>>> Stashed changes
      path: 'contenido/inicioprincipal',
      component: PaginaprincipalComponent
    },
    {
      path: 'contenido/inicio',
      component: InicioComponent
    },

    {
      path: 'contenido/add',
      component: ContenidoAddComponent
    },
    {
      path: 'contenido/quiz',
      component: CrudquizComponent
    },
    {
      path: 'contenido/list',
      component: ContenidoListComponent
    },
    {
      path: 'contenido/edit/:id',
      component: ContenidoAddComponent
    },
    {
      path: 'contenido/body',
      component: ContenidoBodyComponent
    },
    {
      path: 'quiz/crear',
      component: CrearComponent
    },
    {
      path: 'quiz/actualizar',
      component: ActualizarComponent
    },
    {
      path: 'pregunta/list',
      component: CrudpreguntaComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
