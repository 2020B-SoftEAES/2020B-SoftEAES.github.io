import { Component, OnInit } from '@angular/core';
import {AppConstant} from '../../../app.constant';
import {PreguntaDto} from '../../../dtos/pregunta.dto';
import {PruebaDto} from '../../../dtos/prueba.dto';
import {AlertMessageService} from '../../../services/alert-message.service';
import {PruebaService} from '../../../services/rest/prueba.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-visualizar-examen-page',
  templateUrl: './visualizar-examen-page.component.html',
  styleUrls: ['./visualizar-examen-page.component.css']
})
export class VisualizarExamenPageComponent implements OnInit {

  pruebaDto: PruebaDto;
  preguntas: PreguntaDto[];
  ruta: any;
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
        this.pruebaDto = value;
        this.preguntas = value.preguntas;
      },
      error => {
        this.alertMessageService.toastInfo(AppConstant.MENSAGE_OBTENER_DATOS);
      }
    );
  }
}
