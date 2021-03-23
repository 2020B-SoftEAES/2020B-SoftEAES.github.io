import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AutenticacionService} from '../../services/autenticacion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ruta: any;
  constructor(
    private readonly routerService: Router,
    private readonly autenticacionService: AutenticacionService
  ) { }

  ngOnInit(): void {
    this.ruta = ['/login'];
  }

  logOut(): void{
    this.autenticacionService.sesionDto.usuarioDto = null;
    this.routerService.navigate((this.ruta));
  }

}
