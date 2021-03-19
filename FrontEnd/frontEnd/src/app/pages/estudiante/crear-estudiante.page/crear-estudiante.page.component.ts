import { Component, OnInit } from '@angular/core';
import {CrearUsuarioDto} from '../../../dtos/usuario.dto';
import {AppConstant} from '../../../app.constant';
import {AlertMessageService} from '../../../services/alert-message.service';
import {UsuarioService} from '../../../services/rest/usuario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crear-estudiante.page',
  templateUrl: './crear-estudiante.page.component.html',
  styleUrls: ['./crear-estudiante.page.component.css']
})
export class CrearEstudiantePageComponent implements OnInit {

  estudianteDto: CrearUsuarioDto;
  ruta: any;
  constructor(
    private readonly alertMessageService: AlertMessageService,
    private readonly usuaeioService: UsuarioService,
    private readonly routerService: Router
  ) { }

  ngOnInit(): void {
    this.ruta = ['/main/estudiante'];
    this.estudianteDto = {} as CrearUsuarioDto;
    this.estudianteDto.idTipoUsuario = AppConstant.ID_TIPO_USUARIO_ESTUDIANTE;
  }

  onClickGuardarEstudiante(formularioEstudiante): void{
    if (formularioEstudiante.valid) {
      this.usuaeioService.create(this.estudianteDto).subscribe(
        value => {
          this.alertMessageService.toastInfo(AppConstant.MENSAGE_CREADO_CORRECTO);
          this.routerService.navigate((this.ruta));
        },
        error => {
          this.alertMessageService.mensajeError(AppConstant.MENSAGE_ERROR_CREAR);
        }
      );
    } else {
      this.alertMessageService.mensajeInfo(AppConstant.MENSAGE_LLENAR_FORMULARIO);
    }
  }
}
