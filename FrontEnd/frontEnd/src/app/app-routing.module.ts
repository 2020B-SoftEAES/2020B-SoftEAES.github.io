import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {MainLayoutComponent} from './component/main-layout/main-layout.component';
import {ListarEstudiantePageComponent} from './pages/estudiante/listar-estudiante.page/listar-estudiante.page.component';
import {CrearEstudiantePageComponent} from './pages/estudiante/crear-estudiante.page/crear-estudiante.page.component';
import {EditarEstudiantePageComponent} from './pages/estudiante/editar-estudiante.page/editar-estudiante.page.component';
import {ListarInstructorPageComponent} from './pages/instructor/listar-instructor-page/listar-instructor-page.component';
import {CrearInstructorPageComponent} from './pages/instructor/crear-instructor-page/crear-instructor-page.component';
import {EditarInstructorPageComponent} from './pages/instructor/editar-instructor-page/editar-instructor-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainLayoutComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'estudiante'},
      {path: 'estudiante', component: ListarEstudiantePageComponent},
      {path: 'crearEstudiante', component: CrearEstudiantePageComponent},
      {path: 'editarEstudiante/:id', component: EditarEstudiantePageComponent},
      {path: 'instructor', component: ListarInstructorPageComponent},
      {path: 'crearInstructor', component: CrearInstructorPageComponent},
      {path: 'editarInstructor/:id', component: EditarInstructorPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
