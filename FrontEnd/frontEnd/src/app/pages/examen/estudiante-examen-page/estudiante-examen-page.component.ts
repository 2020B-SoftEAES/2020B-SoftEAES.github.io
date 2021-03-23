import { Component, OnInit } from '@angular/core';
import {PruebaDto} from '../../../dtos/prueba.dto';
import {PruebaService} from '../../../services/rest/prueba.service';
import {AlertMessageService} from '../../../services/alert-message.service';
import {AppConstant} from '../../../app.constant';
import {PruebaUsuarioDto} from '../../../dtos/prueba-usuario.dto';
import {PruebaUsuarioService} from '../../../services/rest/prueba-usuario.service';

@Component({
  selector: 'app-estudiante-examen-page',
  templateUrl: './estudiante-examen-page.component.html',
  styleUrls: ['./estudiante-examen-page.component.css']
})
export class EstudianteExamenPageComponent implements OnInit {

  examenesEstudiante: PruebaUsuarioDto[] = [];

  constructor(
    private readonly pruebaEstudianteService: PruebaUsuarioService,
    private readonly alertMessageService: AlertMessageService,
  ) { }

  ngOnInit(): void {
    this.pruebaEstudianteService.findAll().subscribe(pruebaDto => {
        this.examenesEstudiante = pruebaDto;
        if (this.examenesEstudiante.length < 1) {
          this.alertMessageService.mensajeInfo('No existen exámenes rendidos');
        }
      },
      error1 => this.alertMessageService.mensajeError(AppConstant.MENSAJE_ERROR_CONEXION_SERVIDOR)
    );
  }

}
