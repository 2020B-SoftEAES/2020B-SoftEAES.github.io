import {PruebaUsuarioDto} from './prueba-usuario.dto';
import {PruebaPreguntaDto} from './prueba-pregunta.dto';
import {CrearPreguntaDto, PreguntaDto} from './pregunta.dto';

export interface PruebaDto {
  id: number;
  codigo: string;
  tipo: string;
  nombre: string;
  cupos: number;
  duracion: number;
  estado: number;
  pruebaPregunta: PruebaPreguntaDto[];
  pruebaUsuario: PruebaUsuarioDto[];
  preguntas: PreguntaDto[];
}

export interface CrearPruebaDto {
  codigo: string;
  tipo: string;
  nombre: string;
  cupos: number;
  duracion: number;
  preguntas: CrearPreguntaDto[];
}

export interface UpdatePruebaDto {
  tipo: string;
  nombre: string;
  cupos: number;
  duracion: number;
}
