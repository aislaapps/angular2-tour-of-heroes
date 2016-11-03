import { Component } from '@angular/core';
//import "./rxjs-extensions";

@Component({
	selector: 'my-app',
	template:`<h1>{{title}}</h1>
				<!-- <my-heroes></my-heroes> -->
				<nav>
				<a routerLink="/dashboard">Dashboard</a>
				<a routerLink="/heroes">Heroes</a>
				</nav>
				<router-outlet></router-outlet>
			`,
	styleUrls: ['app/app.component.css']
})

export class AppComponent {
	title = "Tour of Heroes";
}