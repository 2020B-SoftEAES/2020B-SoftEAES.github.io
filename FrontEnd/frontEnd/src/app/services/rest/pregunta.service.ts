import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AutenticacionService} from '../autenticacion.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {CrearPreguntaDto, PreguntaDto, UpdatePreguntaDto} from '../../dtos/pregunta.dto';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  private nombreModelo = 'Pregunta';

  constructor(
    private readonly httpClientService: HttpClient,
    private readonly autenticacionService: AutenticacionService
  ) { }

  findAll(): Observable<PreguntaDto[]> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .get<PreguntaDto[]>(environment.url + this.nombreModelo, {headers});
  }

  delete(id: number): Observable<PreguntaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .delete<PreguntaDto>(environment.url + this.nombreModelo + `/${id}`, {headers});
  }

  create(objeto: CrearPreguntaDto): Observable<PreguntaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo;
    return this.httpClientService
      .post<PreguntaDto>(url, objeto, {headers});
  }

  findById(id: number): Observable<PreguntaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/id/' + id;
    return this.httpClientService
      .get<PreguntaDto>(url, {headers});
  }

  updateById(id: number, objeto: UpdatePreguntaDto): Observable<PreguntaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/' + id;
    return this.httpClientService
      .put<PreguntaDto>(url, objeto, {headers});
  }
}
