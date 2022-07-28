import { Component, OnInit } from '@angular/core';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  /** Listado de cards a mostrar */
  public listCards = [
    {
      id: 0,
      name: 'Mujer',
      color: '#9F84F9',
      icon: 'fas fa-percent',
    },
    {
      id: 1,
      name: 'Hombre',
      color: '#3ABCB1',
      icon: 'fas fa-tag',
    },
    {
      id: 2,
      name: 'Outlet',
      color: '#EB5E3E',
      icon: 'fab fa-cloudsmith',
    },
  ];

  /** Id del card seleccionado */
  public idCardSelected = 0;

  constructor() { }

  ngOnInit(): void {
  }

  login = () => {
    window.location.href = `${environment.gcriskUrl}/Login`;
  }

}
