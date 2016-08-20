import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import {HomeComponent} from "./Components/home.component";
import {NavComponent} from "./Components/nav.component";
import {SearchComponent} from "./Components/search.component";
import {ListComponent} from "./Components/list.component";
import {TradesComponent} from "./Components/trades.component";
import {HttpModule, Http, JsonpModule} from "@angular/http";
import {CardComponent} from "./Components/card/card.component";
import {LoginComponent} from "./Components/login.component";
import {User} from "./services/user.service";
import {MyCardsComponents} from "./Components/my-cards.component";
import {ProfileComponent} from "./Components/profile.component";
import {MaterializeCuston} from "./services/materialize.service";
import {NewCardComponent} from "./Components/card/new-card.component";
import {CardService} from "./services/card.service";
import {AttackComponent} from "./Components/card/attack.component";
import {HistoricComponent} from "./Components/historic.component";
import {DatailsComponent} from "./Components/card/datails.component";
import {AbilityComponent} from "./Components/card/ability.component";
import {RetreatCostComponent} from "./Components/card/retreat-cost.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        JsonpModule,
        routing,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NavComponent,
        SearchComponent,
        ListComponent,
        TradesComponent,
        CardComponent,
        LoginComponent,
        MyCardsComponents,
        ProfileComponent,
        NewCardComponent,
        AttackComponent,
        AbilityComponent,
        RetreatCostComponent,
        HistoricComponent,
        DatailsComponent
    ],
    providers: [
        {
            provide: platformBrowser,
            useValue: [ROUTER_DIRECTIVES],
            multi: true
        },
        User,
        CardService,
        MaterializeCuston
    ],
    bootstrap:[
        AppComponent
    ]
})
export class AppModule {}
