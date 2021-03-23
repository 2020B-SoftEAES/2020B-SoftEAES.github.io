import {Component, OnInit} from '@angular/core';
import {AlertMessageService} from '../../../services/alert-message.service';
import {AppConstant} from '../../../app.constant';
import {PruebaDto} from '../../../dtos/prueba.dto';
import {PruebaService} from '../../../services/rest/prueba.service';

@Component({
  selector: 'app-listar-examen-page',
  templateUrl: './listar-examen-page.component.html',
  styleUrls: ['./listar-examen-page.component.css']
})
export class ListarExamenPageComponent implements OnInit {

  examenes: PruebaDto[] = [];

  constructor(
    private readonly pruebaService: PruebaService,
    private readonly alertMessageService: AlertMessageService,
  ) {
  }

  ngOnInit(): void {
    this.pruebaService.findAll().subscribe(pruebaDto => {
        this.examenes = pruebaDto;
        if (this.examenes.length < 1) {
          this.alertMessageService.mensajeInfo('No existen exámenes registrados');
        }
      },
      error1 => this.alertMessageService.mensajeError(AppConstant.MENSAJE_ERROR_CONEXION_SERVIDOR)
    );
  }

}
