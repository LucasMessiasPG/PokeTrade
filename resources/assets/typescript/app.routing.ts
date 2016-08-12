import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./Components/home.component";
import {SearchComponent} from "./Components/search.component";

const routes: Routes = [
    {path: '',redirectTo: '/home',pathMatch: 'full'},
    {path: 'home',component: HomeComponent},
    {path: 'search',component: SearchComponent}
];

export const routing = RouterModule.forRoot(routes);
