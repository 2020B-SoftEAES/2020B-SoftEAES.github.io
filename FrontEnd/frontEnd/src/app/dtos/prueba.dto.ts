import {PruebaUsuarioDto} from './prueba-usuario.dto';
import {PruebaPreguntaDto} from './prueba-pregunta.dto';

export interface PruebaDto {
  id: number;
  codigo: string;
  tipo: string;
  nombre: string;
  pruebaPregunta: PruebaPreguntaDto[];
  pruebaUsuario: PruebaUsuarioDto[];
}

export interface CrearPruebaDto {
  codigo: string;
  tipo: string;
  nombre: string;
}

export interface UpdatePruebaDto {
  tipo: string;
  nombre: string;
}
