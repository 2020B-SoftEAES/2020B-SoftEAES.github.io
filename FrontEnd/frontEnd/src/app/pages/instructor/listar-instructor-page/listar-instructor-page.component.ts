import { Component, OnInit } from '@angular/core';
import {UsuarioDto} from '../../../dtos/usuario.dto';
import {UsuarioService} from '../../../services/rest/usuario.service';
import {AlertMessageService} from '../../../services/alert-message.service';
import {AppConstant} from '../../../app.constant';

@Component({
  selector: 'app-listar-instructor-page',
  templateUrl: './listar-instructor-page.component.html',
  styleUrls: ['./listar-instructor-page.component.css']
})
export class ListarInstructorPageComponent implements OnInit {

  instructores: UsuarioDto[] = [];
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly alertMessageService: AlertMessageService,
  ) { }

  ngOnInit(): void {
    this.usuarioService.findAll().subscribe(usuarioDto => {
        if (this.instructores.length < 1) {
          this.alertMessageService.mensajeInfo('No existen instructores registrados');
        } else {
          this.instructores = usuarioDto.filter(usuario => usuario.idTipoUsuario['id'] === AppConstant.ID_TIPO_USUARIO_INSTRUCTOR);
        }
      },
      error1 => this.alertMessageService.mensajeError(AppConstant.MENSAJE_ERROR_CONEXION_SERVIDOR)
    );
  }

}
