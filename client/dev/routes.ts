import { provideRouter, RouterConfig } from '@angular/router';
import {BodyComponent} from "./components/body.component";
import {SearchComponent} from "./components/search.component";
import {LoginComponent} from "./components/login.component";

const routes: RouterConfig = [
    { path: '', redirectTo: '/home',pathMatch: 'full'},
    { path: 'home', component: BodyComponent},
    { path: 'login', component: LoginComponent},
    { path: 'search', component: SearchComponent},
    { path: 'search/:search', component: SearchComponent},
];

export const appRouterProviders = [
    provideRouter(routes)
];