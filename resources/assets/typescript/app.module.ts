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
import {HttpModule, Http} from "@angular/http";
import {CardComponent} from "./Components/card/card.component";
import {LoginComponent} from "./Components/login.component";
import {User} from "./services/user.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
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
        LoginComponent
    ],
    providers: [
        {
            provide: platformBrowser,
            useValue: [ROUTER_DIRECTIVES],
            multi: true
        },
        User
    ],
    bootstrap:[
        AppComponent
    ]
})
export class AppModule {}
