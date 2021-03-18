import {UsuarioDto} from './usuario.dto';

export interface TipoUsuarioDto {
  id: number;
  codigo: string;
  tipo: string;
  nombre: string;
  usuario: UsuarioDto[];
}
