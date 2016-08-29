import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./Components/home.component";
import {SearchComponent} from "./Components/search.component";
import {ListComponent} from "./Components/list.component";
import {TradesComponent} from "./Components/trades.component";
import {LoginComponent} from "./Components/login.component";
import {MyCardsComponents} from "./Components/my-cards.component";
import {ProfileComponent} from "./Components/profile.component";
import {NewCardComponent} from "./Components/card/new-card.component";
import {MessageComponent} from "./Components/message.component";
import {DetailsComponent} from "./Components/card/details.component";
import {WantListComponet} from "./Components/want-list.component";
import {NewCardWantComponent} from "./Components/card/new-card-want.component";
import {BuyComponent} from "./Components/buy.component";
import {EditUserComponent} from "./Components/user/edit.component";

const routes: Routes = [
    {path: '',redirectTo: '/home',pathMatch: 'full'},
    {path: 'home',component: HomeComponent},
    {path: 'perfil',component: HomeComponent},
    {path: 'search',component: SearchComponent},
    {path: 'list',component: ListComponent},
    {path: 'trades',component: TradesComponent},
    {path: 'buy',component: BuyComponent},
    {path: 'login',component: LoginComponent},
    {path: 'messages',component: MessageComponent},
    {path: 'want-list',component: WantListComponet},
    {path: 'want-list/new',component: NewCardWantComponent},
    {path: 'my-cards',component: MyCardsComponents},
    {path: 'my-cards/new',component: NewCardComponent},
    {path: 'profile/:id',component: ProfileComponent},
    {path: 'profile/:id/edit',component: EditUserComponent},
    {path: 'details/:id',component: DetailsComponent},
];

export const routing = RouterModule.forRoot(routes);
