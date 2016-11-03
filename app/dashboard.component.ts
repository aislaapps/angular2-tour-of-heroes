import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from "./hero";
import { HeroService } from "./hero.service";
import { HeroSearchService } from "./hero-search.service";
import { HeroSearchComponent } from "./hero-search.component";

@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/dashboard.component.html',
	styleUrls: ['app/dashboard.component.css']


})

export class DashboardComponent implements OnInit {

	heroes: Hero[] = [];

	constructor (private router: Router,
				 private heroService: HeroService
				) {}

	ngOnInit(): void {
		this.heroService.getHeroes()
			.then(heroes=> this.heroes = heroes.slice(1,5));
	}

	gotoDetail(hero: Hero): void {
		let link = ['/detail', hero.id ];
		this.router.navigate(link);
	}

}