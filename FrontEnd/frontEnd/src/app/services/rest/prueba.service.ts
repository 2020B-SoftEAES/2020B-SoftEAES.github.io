import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AutenticacionService} from '../autenticacion.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {CrearPruebaDto, PruebaDto, UpdatePruebaDto} from '../../dtos/prueba.dto';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  private nombreModelo = 'Prueba';

  constructor(
    private readonly httpClientService: HttpClient,
    private readonly autenticacionService: AutenticacionService
  ) { }

  findAll(): Observable<PruebaDto[]> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .get<PruebaDto[]>(environment.url + this.nombreModelo);
  }

  delete(id: number): Observable<PruebaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .delete<PruebaDto>(environment.url + this.nombreModelo + `/${id}`);
  }

  create(objeto: CrearPruebaDto): Observable<PruebaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo;
    return this.httpClientService
      .post<PruebaDto>(url, objeto);
  }

  findById(id: number): Observable<PruebaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/id/' + id;
    return this.httpClientService
      .get<PruebaDto>(url);
  }

  updateById(id: number, objeto: UpdatePruebaDto): Observable<PruebaDto> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    const url = environment.url + this.nombreModelo + '/' + id;
    return this.httpClientService
      .put<PruebaDto>(url, objeto);
  }
}
