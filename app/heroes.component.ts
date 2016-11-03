import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

/** moved to hero.ts
//export class Hero {
//	id: number;
//	name: string;
//}
*/

// moved to mock-heroes.ts
// const HEROES: Hero[] = [
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];


@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
//,
//providers: [HeroService]  moved to app.module.js

})

export class HeroesComponent implements OnInit { 
	//title = "Tour of Heroes";  //moved to app.component.ts
	//heroes = HEROES;
	heroes: Hero[];
	selectedHero: Hero;

	ngOnInit(): void {
		this.getHeroes();
	};

	constructor(private router: Router,
              private heroService: HeroService
              ) {};

	getHeroes(): void {
		//this.heroes = this.heroService.getHeroes();
		//this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	};

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	};

	gotoDetail(): void {
    	this.router.navigate(['/detail', this.selectedHero.id]);
  	}

  	add(name: string): void{
  		name = name.trim();
  		if (!name) { return; }
  		this.heroService.create(name)	//create method is in hero.service.ts
  			.then(hero => {
  				this.heroes.push(hero);
  				this.selectedHero = null;
  			});

  		}
  	
  	delete(hero: Hero): void {
  		this.heroService
  			.delete(hero.id)
  			.then(() => {
  				this.heroes = this.heroes.filter(h => h !== hero);
  				if (this.selectedHero === hero) {
  					this.selectedHero = null;
  				}
  			});
  	}
}


//
//old Code
//
// @Component({
//   selector: 'my-heroes',
//   template: `<!-- <h1>{{title}}</h1>  moved to app.component.ts -->
//       <!-- moved to hero-detail.component.ts and replaced by <my-hero-detail>
//         <div *ngIf = "selectedHero">
//         <h2>{{selectedHero.name}}</h2>
//         <div><label> id: </label>{{selectedHero.id}}</div>
//         <div><label> name: </label>{{selectedHero.name}}</div>
//         <div>
//           <label>name: </label>
//           <input [(ngModel)]="selectedHero.name" placeholder="name">
//         </div>
//       </div>
//       -->  

//       <!-- replaced with gotoDetail
//       <my-hero-detail [hero]="selectedHero"></my-hero-detail>
//       -->
//       <div *ngIf = "selectedHero">
//         <h2>
//           {{ selectedHero.name | uppercase }} is my hero
//         </h2>
//         <button (click)="gotoDetail">View Details</button>
//       </div>

//       <ul class = "heroes">  
//       <li *ngFor="let hero of heroes" 
//         [class.selected]="hero === selectedHero"
//         (click)="onSelect(hero)">
  
//         <!-- each array line is here -->
//         <span class="badge">{{hero.id}}</span> {{hero.name}}
      
//       </li>
//       </ul>

//         `
//         ,
//   styles: [`
//   .selected {
//     background-color: #CFD8DC !important;
//     color: white;
//   }
//   .heroes {
//     margin: 0 0 2em 0;
//     list-style-type: none;
//     padding: 0;
//     width: 15em;  
//   }
//   .heroes li {
//     cursor: pointer;
//     position: relative;
//     left: 0;
//     background-color: #EEE;
//     margin: .5em;
//     padding: .3em 0;
//     height: 1.6em;
//     border-radius: 4px;
//   }
//   .heroes li.selected:hover {
//     background-color: #BBD8DC !important;
//     color: white;
//   }
//   .heroes li:hover {
//     color: #607D8B;
//     background-color: #DDD;
//     left: .1em;
//   }
//   .heroes .text {
//     position: relative;
//     top: -3px;
//   }
//   .heroes .badge {
//     display: inline-block;
//     font-size: small;
//     color: white;
//     padding: 0.8em 0.7em 0 0.7em;
//     background-color: #607D8B;
//     line-height: 1em;
//     position: relative;
//     left: -1px;
//     top: -4px;
//     height: 1.8em;
//     margin-right: .8em;
//     border-radius: 4px 0 0 4px;
//   }
// `]
// //,
// //providers: [HeroService]  moved to app.module.js

// })
