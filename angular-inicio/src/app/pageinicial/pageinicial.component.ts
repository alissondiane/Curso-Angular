import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageinicial',
  templateUrl: './pageinicial.component.html',
  styleUrls: ['./pageinicial.component.css']
})
export class PageinicialComponent implements OnInit {

  title = 'Aplicacion inicio';

  constructor() { }

  ngOnInit(): void {
  }

}