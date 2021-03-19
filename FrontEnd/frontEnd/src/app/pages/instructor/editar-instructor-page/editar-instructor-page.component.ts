import { Component, OnInit } from '@angular/core';
import {CrearUsuarioDto, UpdateUsuarioDto, UsuarioDto} from '../../../dtos/usuario.dto';
import {AlertMessageService} from '../../../services/alert-message.service';
import {UsuarioService} from '../../../services/rest/usuario.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppConstant} from '../../../app.constant';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-editar-instructor-page',
  templateUrl: './editar-instructor-page.component.html',
  styleUrls: ['./editar-instructor-page.component.css']
})
export class EditarInstructorPageComponent implements OnInit {

  instructorDto: UpdateUsuarioDto;
  ruta: any;
  id: number;
  constructor(
    private readonly alertMessageService: AlertMessageService,
    private readonly usuaeioService: UsuarioService,
    private readonly routerService: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ruta = ['/main/instructor'];
    this.instructorDto = {} as CrearUsuarioDto;
    this.activatedRoute.params.pipe(
      map(params => params.id),
      switchMap(id => this.usuaeioService.findById(id))
    ).subscribe(
      value => {
        const usuarioDto: UsuarioDto = value as UsuarioDto;
        this.id = value.id;
        this.instructorDto = {
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

  onClickGuardarInstructor(formularioInstructor): void{
    if (formularioInstructor.valid) {
      this.usuaeioService.updateById(this.id, this.instructorDto).subscribe(
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
