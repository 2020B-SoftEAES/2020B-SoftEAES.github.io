import { Component, OnInit } from '@angular/core';
import {CrearUsuarioDto} from '../../../dtos/usuario.dto';
import {AlertMessageService} from '../../../services/alert-message.service';
import {UsuarioService} from '../../../services/rest/usuario.service';
import {Router} from '@angular/router';
import {AppConstant} from '../../../app.constant';

@Component({
  selector: 'app-crear-instructor-page',
  templateUrl: './crear-instructor-page.component.html',
  styleUrls: ['./crear-instructor-page.component.css']
})
export class CrearInstructorPageComponent implements OnInit {

  instructorDto: CrearUsuarioDto;
  ruta: any;
  constructor(
    private readonly alertMessageService: AlertMessageService,
    private readonly usuaeioService: UsuarioService,
    private readonly routerService: Router
  ) { }

  ngOnInit(): void {
    this.ruta = ['/main/instructor'];
    this.instructorDto = {} as CrearUsuarioDto;
    this.instructorDto.idTipoUsuario = AppConstant.ID_TIPO_USUARIO_INSTRUCTOR;
  }

  onClickGuardarInstructor(formularioInstructor): void{
    if (formularioInstructor.valid) {
      this.usuaeioService.create(this.instructorDto).subscribe(
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
