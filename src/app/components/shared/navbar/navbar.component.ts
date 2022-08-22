import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _routerHero:Router) { }

  ngOnInit(): void {
  }

  buscarHero(termino:string){
    console.log(termino);
    this._routerHero.navigate(['/buscador',termino]);
  }

}
