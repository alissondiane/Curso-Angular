import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from '../Destino-viaje';

@Component({
  selector: 'app-lista-destino',
  templateUrl: './lista-destino.component.html',
  styleUrls: ['./lista-destino.component.css']
})
export class ListaDestinoComponent implements OnInit {

  destinos: DestinoViaje[];

  constructor() { 

    this.destinos = [];
  }

  ngOnInit(): void {
  
  }
  guardar(n:string,	u:string):	boolean	{
    this.destinos.push(new	DestinoViaje(n,	u));
    console.log(this.destinos);
    return false;
  }
}
