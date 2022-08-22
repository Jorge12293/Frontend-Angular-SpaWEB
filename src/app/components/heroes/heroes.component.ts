import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroe';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes:Heroe[]=[];
  constructor(
    private _heroService:HeroesService,
    private _routerHero:Router) { }

  ngOnInit(): void {
    this.heroes=this._heroService.getHeroes();
    console.log(this.heroes);
  }
   verHero(index:number){
    this._routerHero.navigate(['/hero',index]);
    console.log(index);
   }
}
