import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Hero } from "./hero";
import { HeroService } from "./hero.service";
//import { DashboardComponent } from "./dashboard.component";

@Component({
	moduleId: module.id,
	selector: 'my-hero-detail',
	//templateUrl: '/app/hero-detail.component.html',  // app is removed becoz module.id can handle it
	//styleUrls: ['app/hero-detail.component.css']
	templateUrl: 'hero-detail.component.html',
	styleUrls: ['hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
	/** hero : Hero; **/
	@Input()
	hero: Hero;

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {

				let id = +params['id'];
				this.heroService.getHero(id)
					.then(hero => this.hero = hero);
			});
	};

	constructor (private heroService: HeroService,
				private route: ActivatedRoute,
				private location: Location
				){

	};

	goBack(): void {

		window.history.back();
		// this.location.back();

	};

	save(): void {

		this.heroService.update(this.hero)
			.then(() => this.goBack());

	};

}

//
//old
//@Component({
//	selector: 'my-hero-detail',	
// 	template:`
// 	  		<div *ngIf = "hero">
// 				<h2>{{hero.name}} details!</h2>
// 				<div><label> id: </label>{{hero.id}}</div>
// 				<div><label> name: </label>{{hero.name}}</div>
// 				<div>
// 					<label>name: </label>
// 					<input [(ngModel)]="hero.name" placeholder="name">
// 				</div>
// 				<button> (click)="goBack()">Back</button>
// 			</div>
// 	`
// })

// export class HeroDetailComponent  {
// 	* hero : Hero; *
// 	@Input()
// 	hero: Hero;

// }

