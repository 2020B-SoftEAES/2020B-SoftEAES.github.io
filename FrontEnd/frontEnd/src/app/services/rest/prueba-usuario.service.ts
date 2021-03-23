import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AutenticacionService} from '../autenticacion.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {CrearPruebaUsuarioDto, PruebaUsuarioDto} from '../../dtos/prueba-usuario.dto';

@Injectable({
  providedIn: 'root'
})
export class PruebaUsuarioService {

  private nombreModelo = 'PruebaUsuario';

  constructor(
    private readonly httpClientService: HttpClient,
    private readonly autenticacionService: AutenticacionService
  ) { }

  findAll(): Observable<PruebaUsuarioDto[]> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .get<PruebaUsuarioDto[]>(environment.url + this.nombreModelo);
  }

  delete(id: number): Observable<PruebaUsuarioDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .delete<PruebaUsuarioDto>(environment.url + this.nombreModelo + `/${id}`);
  }

  create(objeto: CrearPruebaUsuarioDto): Observable<PruebaUsuarioDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo;
    return this.httpClientService
      .post<PruebaUsuarioDto>(url, objeto);
  }

  findById(id: number): Observable<PruebaUsuarioDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/' + id;
    return this.httpClientService
      .get<PruebaUsuarioDto>(url);
  }
}
