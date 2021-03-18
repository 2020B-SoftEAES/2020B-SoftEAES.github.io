import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AutenticacionService} from '../autenticacion.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AsignaturaDto, CrearUpdateAsignaturaDto} from '../../dtos/asignatura.dto';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  private nombreModelo = 'Asignatura';

  constructor(
    private readonly httpClientService: HttpClient,
    private readonly autenticacionService: AutenticacionService
  ) { }

  findAll(): Observable<AsignaturaDto[]> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .get<AsignaturaDto[]>(environment.url + this.nombreModelo, {headers});
  }

  delete(id: number): Observable<AsignaturaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .delete<AsignaturaDto>(environment.url + this.nombreModelo + `/${id}`, {headers});
  }

  create(objeto: CrearUpdateAsignaturaDto): Observable<AsignaturaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo;
    return this.httpClientService
      .post<AsignaturaDto>(url, objeto, {headers});
  }

  findById(id: number): Observable<AsignaturaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/id/' + id;
    return this.httpClientService
      .get<AsignaturaDto>(url, {headers});
  }

  updateById(id: number, objeto: CrearUpdateAsignaturaDto): Observable<AsignaturaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/' + id;
    return this.httpClientService
      .put<AsignaturaDto>(url, objeto, {headers});
  }
}
