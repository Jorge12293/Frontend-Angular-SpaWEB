import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroe';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  hero:Heroe | undefined;

  constructor(private activatedRoute: ActivatedRoute,private _heroService:HeroesService) {
    
    this.activatedRoute.params.subscribe(paramsHero=>{
      console.log(paramsHero);
      console.log(paramsHero['id']);
      this.hero = this._heroService.getHero(paramsHero['id']);
      console.log(this.hero);
    });

   }

  ngOnInit(): void {
  }

}
