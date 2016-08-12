import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./Components/home.component";
import {SearchComponent} from "./Components/search.component";
import {ListComponent} from "./Components/list.component";
import {TradesComponent} from "./Components/trades.component";

const routes: Routes = [
    {path: '',redirectTo: '/home',pathMatch: 'full'},
    {path: 'home',component: HomeComponent},
    {path: 'search',component: SearchComponent},
    {path: 'list',component: ListComponent},
    {path: 'trades',component: TradesComponent},
];

export const routing = RouterModule.forRoot(routes);
