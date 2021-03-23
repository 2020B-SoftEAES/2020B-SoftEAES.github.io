import {Injectable} from '@angular/core';
import {SesionDto} from '../dtos/sesion.dto';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {UsuarioDto} from '../dtos/usuario.dto';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private nombreModelo = 'autenticacion';
  public sesionDto: SesionDto;

  constructor(
    private readonly httpClientService: HttpClient
  ) {
    this.sesionDto  = {
      accessToken: 'TOKEN',
      usuarioDto: null
    };
  }

  login(email: string, pass: string): Observable<any> {
    const Objeto = {
      email,
      password: pass
    };
    return this.httpClientService
      .post<UsuarioDto>(environment.url + this.nombreModelo, Objeto)
      .pipe(map(u => {
        this.sesionDto.usuarioDto = u;
        if (this.estaAutenticado()) {
          return of(true);
        } else {
          return of(false);
        }
      }));
  }

  estaAutenticado(): boolean {
    return !!this.sesionDto.usuarioDto;
  }
}
