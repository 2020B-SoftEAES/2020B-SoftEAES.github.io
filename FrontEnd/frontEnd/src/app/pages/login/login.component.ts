import { Component, OnInit } from '@angular/core';
import {AutenticacionService} from '../../services/autenticacion.service';
import {CrearUsuarioDto, UsuarioDto} from '../../dtos/usuario.dto';
import {UsuarioService} from '../../services/rest/usuario.service';
import {TipoUsuarioService} from '../../services/rest/tipo-usuario.service';
import {TipoUsuarioDto} from '../../dtos/tipo-usuario.dto';
import {Router} from '@angular/router';
import {AppConstant} from '../../app.constant';
import {AlertMessageService} from '../../services/alert-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  ruta: any;

  constructor(
    private readonly autenticacionService: AutenticacionService,
    private readonly routerService: Router,
    private readonly alertMessageService: AlertMessageService
  ) { }

  ngOnInit(): void {
    this.ruta = ['/main'];
    this.email = 'robert@hotmail.com';
    this.password = '123456';
  }

  login(formularioLogin): void{
    if (formularioLogin.valid){
      this.autenticacionService.login(this.email, this.password).subscribe(
        autenticado => {
          if (autenticado){
            this.routerService.navigate((this.ruta));
          } else {
            this.alertMessageService.mensajeError('Credenciales Incorrectas!!');
          }
        },
        error => {
          this.alertMessageService.mensajeError('Credenciales Incorrectas!!');
        }
      );
    } else {
      this.alertMessageService.mensajeError('Ingrese las credenciales!!');
    }
  }

  /*verificar(): void {
    const usuaario: CrearUsuarioDto = {
      nombre: 'Roberto',
      apellido: 'Toa',
      cedula: '1723012553',
      contrasenia: '123456',
      genero: 'M',
      fechaNacimiento: new Date(),
      celular: '0984050629',
      email: 'robert12@hotmail.com',
      idTipoUsuario: null
    };
    this.usuarioService.create(usuaario).subscribe( value => {
      alert('Creado exitosamente');
    });
  }*/
}
