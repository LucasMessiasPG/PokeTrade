import { Component } from '@angular/core';
import {NavComponent} from "./Components/nav.component";
import {FooterComponent} from "./Components/footer.component";

@Component({
    'selector': 'poke',
    'template': `
    <div class="site">
        <header>
            <poke-nav></poke-nav>
        </header>
        <main class="site-content">
            <router-outlet></router-outlet>
        </main>
        <footer class="page-footer">
            <poke-footer></poke-footer>
        </footer>
    </div>
    `,
    directives:[NavComponent,FooterComponent]
})
export class AppComponent {
    constructor () {}
}