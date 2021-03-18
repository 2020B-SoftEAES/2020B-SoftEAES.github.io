import {PreguntaDto} from './pregunta.dto';

export interface AsignaturaDto {
  id: number;
  nombre: string;
  pregunta: PreguntaDto[];
}

export interface CrearUpdateAsignaturaDto {
  nombre: string;
}
