import { Component, OnInit } from '@angular/core';
import {AppConstant} from '../../../app.constant';
import {CrearUsuarioDto, UpdateUsuarioDto, UsuarioDto} from '../../../dtos/usuario.dto';
import {AlertMessageService} from '../../../services/alert-message.service';
import {UsuarioService} from '../../../services/rest/usuario.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-editar-estudiante.page',
  templateUrl: './editar-estudiante.page.component.html',
  styleUrls: ['./editar-estudiante.page.component.css']
})
export class EditarEstudiantePageComponent implements OnInit {

  estudianteDto: UpdateUsuarioDto;
  ruta: any;
  id: number;
  constructor(
    private readonly alertMessageService: AlertMessageService,
    private readonly usuaeioService: UsuarioService,
    private readonly routerService: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ruta = ['/main/estudiante'];
    this.estudianteDto = {} as CrearUsuarioDto;
    this.activatedRoute.params.pipe(
      map(params => params.id),
      switchMap(id => this.usuaeioService.findById(id))
    ).subscribe(
      value => {
        const usuarioDto: UsuarioDto = value as UsuarioDto;
        this.id = value.id;
        this.estudianteDto = {
          apellido: usuarioDto.apellido,
          cedula: usuarioDto.cedula,
          celular: usuarioDto.celular,
          contrasenia: '',
          email: usuarioDto.email,
          genero: usuarioDto.genero,
          nombre: usuarioDto.nombre,
        };
      },
      error => {
        this.alertMessageService.toastInfo(AppConstant.MENSAGE_OBTENER_DATOS);
      }
    );
  }

  onClickGuardarEstudiante(formularioEstudiante): void{
    if (formularioEstudiante.valid) {
      this.usuaeioService.updateById(this.id, this.estudianteDto).subscribe(
        value => {
          this.alertMessageService.toastInfo(AppConstant.MENSAGE_ACTUALIAZCION_CORRECTO);
          this.routerService.navigate((this.ruta));
        },
        error => {
          this.alertMessageService.mensajeError(AppConstant.MENSAGE_ERROR_ACTUALIZAR);
        }
      );
    } else {
      this.alertMessageService.mensajeInfo(AppConstant.MENSAGE_LLENAR_FORMULARIO);
    }
  }

}
