import { Component, OnInit } from '@angular/core';
import {AppConstant} from '../../../app.constant';
import {AlertMessageService} from '../../../services/alert-message.service';
import {Router} from '@angular/router';
import {CrearPruebaDto, PruebaDto} from '../../../dtos/prueba.dto';
import {PruebaService} from '../../../services/rest/prueba.service';
import {CrearPreguntaDto, PreguntaDto} from '../../../dtos/pregunta.dto';

@Component({
  selector: 'app-crear-examen-page',
  templateUrl: './crear-examen-page.component.html',
  styleUrls: ['./crear-examen-page.component.css']
})
export class CrearExamenPageComponent implements OnInit {

  pruebaDto: CrearPruebaDto;
  preguntaDto: CrearPreguntaDto;
  ruta: any;
  constructor(
    private readonly alertMessageService: AlertMessageService,
    private readonly pruebaService: PruebaService,
    private readonly routerService: Router
  ) { }

  ngOnInit(): void {
    this.ruta = ['/main/examen'];
    this.pruebaDto = {} as CrearPruebaDto;
    this.preguntaDto = {} as CrearPreguntaDto;
    this.pruebaDto.preguntas = [] as CrearPreguntaDto[];
  }

  onClickGuardarExamen(formularioExamen): void{
    if (formularioExamen.valid) {
      this.pruebaService.create(this.pruebaDto).subscribe(
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

  onClickAgregar(formularioPregunta): void{
    if (formularioPregunta.valid) {
      this.pruebaDto.preguntas.push(this.preguntaDto);
      this.preguntaDto = {} as CrearPreguntaDto;
    } else {
      this.alertMessageService.mensajeInfo(AppConstant.MENSAGE_LLENAR_FORMULARIO);
    }
  }

  onClickCancelar(): void {
    this.preguntaDto = {} as CrearPreguntaDto;
  }

  onClickDeletePregunta(index): void {
    this.pruebaDto.preguntas.splice(index, 1);
  }

}
