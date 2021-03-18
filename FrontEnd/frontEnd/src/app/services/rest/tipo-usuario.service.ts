import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AutenticacionService} from '../autenticacion.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {TipoUsuarioDto} from '../../dtos/tipo-usuario.dto';

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {

  private nombreModelo = 'TipoUsuario';

  constructor(
    private readonly httpClientService: HttpClient,
    private readonly autenticacionService: AutenticacionService
  ) { }

  findAll(): Observable<TipoUsuarioDto[]> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .get<TipoUsuarioDto[]>(environment.url + this.nombreModelo, {headers});
  }

  findById(id: number): Observable<TipoUsuarioDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/id/' + id;
    return this.httpClientService
      .get<TipoUsuarioDto>(url, {headers});
  }
}
