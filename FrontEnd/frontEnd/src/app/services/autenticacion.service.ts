import { Injectable } from '@angular/core';
import {SesionDto} from '../dtos/sesion.dto';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  public sesionDto: SesionDto;
  constructor() { }
}
