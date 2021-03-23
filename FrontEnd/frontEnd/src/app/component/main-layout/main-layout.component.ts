import { Component, OnInit } from '@angular/core';
import {AutenticacionService} from '../../services/autenticacion.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

}
