export interface PruebaUsuarioDto {
  id: number;
  numeroIntentos: number;
  puntajeObtenido: number;
  respuestas: string;
  idPrueba: number;
  idUsuario: number;
}

export interface CrearPruebaUsuarioDto {
  numeroIntentos: number;
  puntajeObtenido: number;
  respuestas: string;
  idPrueba: number;
  idUsuario: number;
}
