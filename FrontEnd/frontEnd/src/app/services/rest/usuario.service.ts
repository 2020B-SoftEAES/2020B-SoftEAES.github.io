import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AutenticacionService} from '../autenticacion.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {CrearUsuarioDto, UpdateUsuarioDto, UsuarioDto} from '../../dtos/usuario.dto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private nombreModelo = 'Usuario';

  constructor(
    private readonly httpClientService: HttpClient,
    private readonly autenticacionService: AutenticacionService
  ) { }

  findAll(): Observable<UsuarioDto[]> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .get<UsuarioDto[]>(environment.url + this.nombreModelo);
  }

  delete(id: number): Observable<UsuarioDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .delete<UsuarioDto>(environment.url + this.nombreModelo + `/${id}`);
  }

  create(objeto: CrearUsuarioDto): Observable<UsuarioDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo;
    return this.httpClientService
      .post<UsuarioDto>(url, objeto);
  }

  findById(id: number): Observable<UsuarioDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/id/' + id;
    return this.httpClientService
      .get<UsuarioDto>(url);
  }

  updateById(id: number, objeto: UpdateUsuarioDto): Observable<UsuarioDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/' + id;
    return this.httpClientService
      .put<UsuarioDto>(url, objeto);
  }
}
