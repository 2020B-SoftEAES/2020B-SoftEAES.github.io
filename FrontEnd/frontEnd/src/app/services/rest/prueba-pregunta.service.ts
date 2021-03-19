import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AutenticacionService} from '../autenticacion.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {PruebaPreguntaDto} from '../../dtos/prueba-pregunta.dto';

@Injectable({
  providedIn: 'root'
})
export class PruebaPreguntaService {

  private nombreModelo = 'PruebaPregunta';

  constructor(
    private readonly httpClientService: HttpClient,
    private readonly autenticacionService: AutenticacionService
  ) { }

  findAll(): Observable<PruebaPreguntaDto[]> {
    const headers = new HttpHeaders({Authorization: this.autenticacionService.sesionDto.accessToken});
    return this.httpClientService
      .get<PruebaPreguntaDto[]>(environment.url + this.nombreModelo);
  }
}
