import {PruebaPreguntaDto} from './prueba-pregunta.dto';

export interface PreguntaDto {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  codigo: string;
  descripcion: string;
  opcion1: string;
  opcion2: string;
  opcion3: string;
  opcion4: string;
  respuestaCorrecta: number;
  puntaje: number;
  pruebaPregunta: PruebaPreguntaDto[];
  idAsignatura: number;
}

export interface CrearPreguntaDto {
  codigo: string;
  descripcion: string;
  opcion1: string;
  opcion2: string;
  opcion3: string;
  opcion4: string;
  respuestaCorrecta: number;
  puntaje: number;
  idAsignatura: number;
}

export interface UpdatePreguntaDto {
  descripcion: string;
  opcion1: string;
  opcion2: string;
  opcion3: string;
  opcion4: string;
  respuestaCorrecta: number;
  puntaje: number;
}
