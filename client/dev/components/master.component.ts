import {Component} from "@angular/core";
import {NavBarComponent} from "./nav-bar.component";
import {ProfileFloatComponent} from "./profile-float.component";
import {BodyComponent} from "./body.component";
import {FooterComponent} from "./footer.component";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Env} from "../providers/env.provider";
@Component({
    selector:'app',
    template:`
    <div class="navbar">
        <div class="container">
            <poke-nav-bar></poke-nav-bar>
        </div>
    </div>
    <poke-profile-float></poke-profile-float>
    <router-outlet></router-outlet>
    <poke-footer></poke-footer>
    `,
    directives:[
        ROUTER_DIRECTIVES,
        NavBarComponent,
        ProfileFloatComponent,
        FooterComponent
    ],
    providers:[Env]
})
export class MasterComponent{
}