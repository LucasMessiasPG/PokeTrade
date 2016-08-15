import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./Components/home.component";
import {SearchComponent} from "./Components/search.component";
import {ListComponent} from "./Components/list.component";
import {TradesComponent} from "./Components/trades.component";
import {LoginComponent} from "./Components/login.component";
import {MyCardsComponents} from "./Components/my-cards.component";

const routes: Routes = [
    {path: '',redirectTo: '/home',pathMatch: 'full'},
    {path: 'home',component: HomeComponent},
    {path: 'perfil',component: HomeComponent},
    {path: 'search',component: SearchComponent},
    {path: 'list',component: ListComponent},
    {path: 'trades',component: TradesComponent},
    {path: 'login',component: LoginComponent},
    {path: 'my-cards',component: MyCardsComponents},
];

export const routing = RouterModule.forRoot(routes);
