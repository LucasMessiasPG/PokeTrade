import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import {HomeComponent} from "./Components/home.component";
import {NavComponent} from "./Components/nav.component";
import {SearchComponent} from "./Components/search.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NavComponent,
        SearchComponent
    ],
    providers: [
        {
            provide: platformBrowser,
            useValue: [ROUTER_DIRECTIVES],
            multi: true
        }
    ],
    bootstrap:[
        AppComponent
    ]
})
export class AppModule {}
