import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AutenticacionService} from '../../services/autenticacion.service';
import {TipoUsuarioDto} from '../../dtos/tipo-usuario.dto';
import {AppConstant} from '../../app.constant';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  roles: string[];
  ruta: any;
  CODIGO_MODULO_ESTUDIANTE: string;
  CODIGO_MODULO_INSTRUCTOR: string;
  CODIGO_MODULO_EXAMEN: string;
  CODIGO_MODULO_EXAMEN_RENDIDO: string;
  CODIGO_MODULO_SIMULADOR: string;
  constructor(
    private readonly routerService: Router,
    private readonly autenticacionService: AutenticacionService
  ) { }

  ngOnInit(): void {
    this.ruta = ['/login'];
    this.roles = [];
    this.CODIGO_MODULO_ESTUDIANTE = AppConstant.CODIGO_MODULO_ESTUDIANTE;
    this.CODIGO_MODULO_INSTRUCTOR = AppConstant.CODIGO_MODULO_INSTRUCTOR;
    this.CODIGO_MODULO_EXAMEN = AppConstant.CODIGO_MODULO_EXAMEN;
    this.CODIGO_MODULO_EXAMEN_RENDIDO = AppConstant.CODIGO_MODULO_EXAMEN_RENDIDO;
    this.CODIGO_MODULO_SIMULADOR = AppConstant.CODIGO_MODULO_SIMULADOR;
    const rolUsuario = this.autenticacionService.sesionDto.usuarioDto.idTipoUsuario as TipoUsuarioDto;
    switch (rolUsuario.codigo){
      case AppConstant.CODIGO_TIPO_USUARIO_ADIMINSTRADOR:
        this.roles = AppConstant.ROL_ADMINISTRADOR;
        break;
      case AppConstant.CODIGO_TIPO_USUARIO_INSTRUCTOR:
        this.roles = AppConstant.ROL_INSTRUCTOR;
        break;
      case AppConstant.CODIGO_TIPO_USUARIO_ESTUDIANTE:
        this.roles = AppConstant.ROL_ESTUDIANTE;
        break;
      default:
        break;
    }
  }

  logOut(): void{
    this.autenticacionService.sesionDto.usuarioDto = null;
    this.routerService.navigate((this.ruta));
  }

}
