import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroe';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  nameHero:string="";
  heroes:Heroe[]=[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _buscadorService:HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramName=>{
      this.nameHero=paramName['termino'];
      this.heroes=this._buscadorService.buscarHero(this.nameHero);
    });
  }

}
