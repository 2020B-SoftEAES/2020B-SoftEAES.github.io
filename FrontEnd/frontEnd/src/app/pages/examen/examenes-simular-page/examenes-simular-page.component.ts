import { Component, OnInit } from '@angular/core';
import {PruebaDto} from '../../../dtos/prueba.dto';
import {PruebaService} from '../../../services/rest/prueba.service';
import {AlertMessageService} from '../../../services/alert-message.service';
import {AppConstant} from '../../../app.constant';

@Component({
  selector: 'app-examenes-simular-page',
  templateUrl: './examenes-simular-page.component.html',
  styleUrls: ['./examenes-simular-page.component.css']
})
export class ExamenesSimularPageComponent implements OnInit {

  examenes: PruebaDto[] = [];
  constructor(
    private readonly pruebaService: PruebaService,
    private readonly alertMessageService: AlertMessageService,
  ) { }

  ngOnInit(): void {
    this.pruebaService.findAll().subscribe(pruebaDto => {
        this.examenes = pruebaDto.filter( prueba => prueba.estado === AppConstant.EXAMEN_ESTADO_HABILITADO);
        if (this.examenes.length < 1) {
          this.alertMessageService.mensajeInfo('No existen exámenes para simular');
        }
      },
      error1 => this.alertMessageService.mensajeError(AppConstant.MENSAJE_ERROR_CONEXION_SERVIDOR)
    );
  }

}
