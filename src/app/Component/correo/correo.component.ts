import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;
  constructor() { 
    this.correo = {
      titulo: "Titulo del Email",
      cuerpo: 'Éste es el cuerpo del Email, Éste es el cuerpo del Email, Éste es el cuerpo del Email',
      emisor: 'correoEmisor@openWebinar.inv',
      destinatario: 'correoReceptor@openWebinar.inv'
    }
  }

  ngOnInit(): void {

  }

}
