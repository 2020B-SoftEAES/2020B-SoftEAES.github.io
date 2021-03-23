import {PruebaUsuarioDto} from './prueba-usuario.dto';
import {TipoUsuarioDto} from './tipo-usuario.dto';

export interface UsuarioDto {
  id: number;
  nombre: string;
  apellido: string;
  cedula: string;
  contrasenia: string;
  genero: string;
  fechaNacimiento: Date;
  celular: string;
  email: string;
  idTipoUsuario: number | TipoUsuarioDto;
  pruebaUsuario: PruebaUsuarioDto[];
}

export interface CrearUsuarioDto {
  nombre: string;
  apellido: string;
  cedula: string;
  contrasenia: string;
  genero: string;
  fechaNacimiento: Date;
  celular: string;
  email: string;
  idTipoUsuario: number;
}

export interface UpdateUsuarioDto {
  nombre: string;
  apellido: string;
  cedula: string;
  contrasenia: string;
  genero: string;
  celular: string;
  email: string;
}
