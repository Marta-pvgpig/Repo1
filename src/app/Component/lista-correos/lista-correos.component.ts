import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-correos',
  templateUrl: './lista-correos.component.html',
  styleUrls: ['./lista-correos.component.scss']
})
export class ListaCorreosComponent implements OnInit {

  correos: any[];
  
  constructor() { 
    const correo1 = {
      titulo: "Título del 1",
      cuerpo: 'Éste es el cuerpo del Email, Éste es el cuerpo del Email, Éste es el cuerpo del Email',
      emisor: 'correoEmisor1@openWebinar.inv',
      destinatario: 'codigoReceptor@openWebinar.inv',
      leido: true
    };

    const correo2 = {
      titulo: "Título del 2",
      cuerpo: 'Éste es el cuerpo del Email, Éste es el cuerpo del Email, Éste es el cuerpo del Email',
      emisor: 'correoEmisor2@openWebinar.inv',
      destinatario: 'codigoReceptor@openWebinar.inv',
      leido: false
    };

    this.correos = [];
    this.correos.push(correo1);
    this.correos.push(correo2);
  }

  ngOnInit(): void {
  }

}
