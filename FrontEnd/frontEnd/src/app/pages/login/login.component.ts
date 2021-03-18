import { Component, OnInit } from '@angular/core';
import {AutenticacionService} from '../../services/autenticacion.service';
import {CrearUsuarioDto, UsuarioDto} from '../../dtos/usuario.dto';
import {UsuarioService} from '../../services/rest/usuario.service';
import {TipoUsuarioService} from '../../services/rest/tipo-usuario.service';
import {TipoUsuarioDto} from '../../dtos/tipo-usuario.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  constructor(
    private readonly autenticacionService: AutenticacionService
  ) { }

  ngOnInit(): void {
  }

  login(formularioLogin): void{
    if (formularioLogin.valid){
      this.autenticacionService.login(this.email, this.password).subscribe(
        autenticado => {
          console.log(autenticado);
          if (autenticado){
            alert('Bienvenidos');
          } else {
            alert('Credenciales incorrectas');
          }
        },
        error => {
          alert('Credenciales Incorrectas!!');
        }
      );
    } else {
      alert('Ingrese las credenciales!');
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
