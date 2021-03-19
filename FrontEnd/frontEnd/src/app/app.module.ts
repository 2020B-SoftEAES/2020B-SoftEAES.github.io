import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';
import {ListarEstudiantePageComponent} from './pages/estudiante/listar-estudiante.page/listar-estudiante.page.component';
import {CrearEstudiantePageComponent} from './pages/estudiante/crear-estudiante.page/crear-estudiante.page.component';
import {EditarEstudiantePageComponent} from './pages/estudiante/editar-estudiante.page/editar-estudiante.page.component';
import { CrearInstructorPageComponent } from './pages/instructor/crear-instructor-page/crear-instructor-page.component';
import { ListarInstructorPageComponent } from './pages/instructor/listar-instructor-page/listar-instructor-page.component';
import { EditarInstructorPageComponent } from './pages/instructor/editar-instructor-page/editar-instructor-page.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    MainLayoutComponent,
    ListarEstudiantePageComponent,
    CrearEstudiantePageComponent,
    EditarEstudiantePageComponent,
    CrearInstructorPageComponent,
    ListarInstructorPageComponent,
    EditarInstructorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
