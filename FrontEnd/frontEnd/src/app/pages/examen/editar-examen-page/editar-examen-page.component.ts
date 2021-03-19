import { Component, OnInit } from '@angular/core';
import {PruebaDto, UpdatePruebaDto} from '../../../dtos/prueba.dto';
import {PreguntaDto} from '../../../dtos/pregunta.dto';
import {AlertMessageService} from '../../../services/alert-message.service';
import {PruebaService} from '../../../services/rest/prueba.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {AppConstant} from '../../../app.constant';

@Component({
  selector: 'app-editar-examen-page',
  templateUrl: './editar-examen-page.component.html',
  styleUrls: ['./editar-examen-page.component.css']
})
export class EditarExamenPageComponent implements OnInit {

  pruebaDto: UpdatePruebaDto;
  preguntas: PreguntaDto[];
  ruta: any;
  id: number;
  codigo: string;
  constructor(
    private readonly alertMessageService: AlertMessageService,
    private readonly pruebaService: PruebaService,
    private readonly routerService: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ruta = ['/main/examen'];
    this.pruebaDto = {} as PruebaDto;
    this.preguntas = [] as PreguntaDto[];
    this.activatedRoute.params.pipe(
      map(params => params.id),
      switchMap(id => this.pruebaService.findById(id))
    ).subscribe(
      value => {
        this.pruebaDto = {
          cupos: value.cupos,
          duracion: value.duracion,
          nombre: value.nombre,
          tipo: value.tipo
        };
        this.id = value.id;
        this.codigo = value.codigo;
        this.preguntas = value.preguntas;
      },
      error => {
        this.alertMessageService.toastInfo(AppConstant.MENSAGE_OBTENER_DATOS);
      }
    );
  }

  onClickGuardarExamen(formularioExamen): void{
    if (formularioExamen.valid) {
      this.pruebaService.updateById(this.id, this.pruebaDto).subscribe(
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
