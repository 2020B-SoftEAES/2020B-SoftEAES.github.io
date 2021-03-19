import { Component, OnInit } from '@angular/core';
import {UsuarioDto} from '../../../dtos/usuario.dto';
import {AlertMessageService} from '../../../services/alert-message.service';
import {UsuarioService} from '../../../services/rest/usuario.service';
import {AppConstant} from '../../../app.constant';

@Component({
  selector: 'app-listar-estudiante.page',
  templateUrl: './listar-estudiante.page.component.html',
  styleUrls: ['./listar-estudiante.page.component.css']
})
export class ListarEstudiantePageComponent implements OnInit {

  estudiantes: UsuarioDto[] = [];
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly alertMessageService: AlertMessageService,
  ) { }

  ngOnInit(): void {
    this.usuarioService.findAll().subscribe(usuarioDto => {
      this.estudiantes = usuarioDto.filter( usuario => usuario.idTipoUsuario['id'] === AppConstant.ID_TIPO_USUARIO_ESTUDIANTE);
      if (this.estudiantes.length < 1) {
          this.alertMessageService.mensajeInfo('No existen estudiantes registrados');
        }
      },
      error1 => this.alertMessageService.mensajeError(AppConstant.MENSAJE_ERROR_CONEXION_SERVIDOR)
    );
  }

}
