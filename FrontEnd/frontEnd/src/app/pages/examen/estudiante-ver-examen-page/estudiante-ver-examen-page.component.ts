import { Component, OnInit } from '@angular/core';
import {PruebaDto} from '../../../dtos/prueba.dto';
import {PreguntaDto} from '../../../dtos/pregunta.dto';
import {AlertMessageService} from '../../../services/alert-message.service';
import {PruebaService} from '../../../services/rest/prueba.service';
import {PruebaUsuarioService} from '../../../services/rest/prueba-usuario.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AutenticacionService} from '../../../services/autenticacion.service';
import {CrearPruebaUsuarioDto, PruebaUsuarioDto} from '../../../dtos/prueba-usuario.dto';
import {AppConstant} from '../../../app.constant';
import {map, switchMap} from 'rxjs/operators';
import getDocumentElement from '@popperjs/core/lib/dom-utils/getDocumentElement';

@Component({
  selector: 'app-estudiante-ver-examen-page',
  templateUrl: './estudiante-ver-examen-page.component.html',
  styleUrls: ['./estudiante-ver-examen-page.component.css']
})
export class EstudianteVerExamenPageComponent implements OnInit {

  pruebaUsuarioDto: PruebaUsuarioDto;
  pruebaDto: PruebaDto;
  preguntas: PreguntaDto[];
  ruta: any;
  respuestas: number[];

  constructor(
    private readonly alertMessageService: AlertMessageService,
    private readonly pruebaService: PruebaService,
    private readonly pruebaUsuarioService: PruebaUsuarioService,
    private readonly routerService: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly autenticacionService: AutenticacionService
  ) { }

  ngOnInit(): void {
    this.respuestas = [];
    this.ruta = ['/main/estudianteExamen'];
    this.pruebaUsuarioDto = {} as PruebaUsuarioDto;
    this.pruebaDto = {} as PruebaDto;
    this.preguntas = [] as PreguntaDto[];
    this.activatedRoute.params.pipe(
      map(params => params.id),
      switchMap(id => this.pruebaUsuarioService.findById(id))
    ).subscribe(
      value => {
        this.pruebaUsuarioDto = value;
        this.pruebaDto =  value.idPrueba as PruebaDto;
        this.respuestas = value.respuestas.split(',').map(Number);
        this.pruebaService.findById(this.pruebaDto.id).subscribe( prue => {
          this.preguntas = prue.preguntas;
        });
      },
      error => {
        this.alertMessageService.toastInfo(AppConstant.MENSAGE_OBTENER_DATOS);
      }
    );
  }

}
