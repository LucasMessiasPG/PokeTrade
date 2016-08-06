import { provideRouter, RouterConfig } from '@angular/router';
import {BodyComponent} from "./components/body.component";
import {SearchComponent} from "./components/search.component";

const routes: RouterConfig = [
    { path: 'home', component: BodyComponent},
    { path: 'search', component: SearchComponent},
];

export const appRouterProviders = [
    provideRouter(routes)
];