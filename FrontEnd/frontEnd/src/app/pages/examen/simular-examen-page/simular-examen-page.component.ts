import {Component, OnInit} from '@angular/core';
import {PruebaDto} from '../../../dtos/prueba.dto';
import {PreguntaDto} from '../../../dtos/pregunta.dto';
import {AlertMessageService} from '../../../services/alert-message.service';
import {PruebaService} from '../../../services/rest/prueba.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {AppConstant} from '../../../app.constant';
import {PruebaUsuarioService} from '../../../services/rest/prueba-usuario.service';
import {CrearPruebaUsuarioDto, PruebaUsuarioDto} from '../../../dtos/prueba-usuario.dto';
import {AutenticacionService} from '../../../services/autenticacion.service';

@Component({
  selector: 'app-simular-examen-page',
  templateUrl: './simular-examen-page.component.html',
  styleUrls: ['./simular-examen-page.component.css']
})
export class SimularExamenPageComponent implements OnInit {

  pruebaDto: PruebaDto;
  preguntas: PreguntaDto[];
  ruta: any;
  respuestas: string;
  puntaje: number;
  idUsuario: number;

  constructor(
    private readonly alertMessageService: AlertMessageService,
    private readonly pruebaService: PruebaService,
    private readonly pruebaUsuarioService: PruebaUsuarioService,
    private readonly routerService: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly autenticacionService: AutenticacionService
  ) {
  }

  ngOnInit(): void {
    this.idUsuario = this.autenticacionService.sesionDto.usuarioDto ? this.autenticacionService.sesionDto.usuarioDto.id : null;
    this.respuestas = '';
    this.puntaje = 0;
    this.ruta = ['/main/estudianteExamen'];
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

  templateForm(formulario): void {
    if (this.formularioLleno(formulario)) {
      this.puntajeRespuestas(formulario);
      const objeto: CrearPruebaUsuarioDto = {
        numeroIntentos: 1,
        puntajeObtenido: this.puntaje,
        idPrueba: this.pruebaDto.id,
        idUsuario:  this.idUsuario,
        respuestas: this.respuestas,
      };
      this.pruebaUsuarioService.create(objeto).subscribe(
        value => {
          this.alertMessageService.toastInfo(AppConstant.MENSAGE_CREADO_CORRECTO);
          this.routerService.navigate((this.ruta));
        },
        error => {
          this.alertMessageService.mensajeError(AppConstant.MENSAGE_ERROR_CREAR);
        }
      );
    } else {
      this.alertMessageService.mensajeError(AppConstant.MENSAGE_LLENAR_FORMULARIO);
    }
  }

  formularioLleno(formulario): boolean {
    for (const obj in formulario) {
      if (formulario[obj] == '') {
        return false;
      }
    }
    return true;
  }

  puntajeRespuestas(formulario): void{
    this.respuestas = '';
    this.puntaje = 0;
    this.preguntas.forEach( (pregunta, index) => {
      const objName = 'pregunta' + index;
      const respue = formulario[objName] && formulario[objName]!='' ? formulario[objName] : ' ';
      if (pregunta.respuestaCorrecta == respue){
        this.puntaje += pregunta.puntaje;
      }
      this.respuestas += respue + ',';
    });
  }

}
