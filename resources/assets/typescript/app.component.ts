import { Component } from '@angular/core';
import {NavComponent} from "./Components/nav.component";

@Component({
    'selector': 'poke',
    'template': `
    <poke-nav></poke-nav>
    <router-outlet></router-outlet>
    `,
    directives:[NavComponent]
})
export class AppComponent {
    constructor () {}
}