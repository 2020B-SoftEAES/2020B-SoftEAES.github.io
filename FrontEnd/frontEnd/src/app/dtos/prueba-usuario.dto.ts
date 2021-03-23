import {PruebaDto} from './prueba.dto';
import {UsuarioDto} from './usuario.dto';

export interface PruebaUsuarioDto {
  id: number;
  numeroIntentos: number;
  puntajeObtenido: number;
  respuestas: string;
  idPrueba: number | PruebaDto;
  idUsuario: number | UsuarioDto;
}

export interface CrearPruebaUsuarioDto {
  numeroIntentos: number;
  puntajeObtenido: number;
  respuestas: string;
  idPrueba: number;
  idUsuario: number;
}
