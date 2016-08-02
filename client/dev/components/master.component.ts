import {Component} from "@angular/core";
import {NavBarComponent} from "./nav-bar.component";
import {ProfileFloatComponent} from "./profile-float.component";
import {BodyComponent} from "./body.component";
@Component({
    selector:'app',
    template:`
    <div class="navbar">
        <div class="container">
            <poke-nav-bar></poke-nav-bar>
        </div>
    </div>
    <poke-profile-float></poke-profile-float>
    <poke-body></poke-body>
    `,
    directives:[NavBarComponent,ProfileFloatComponent,BodyComponent]
})
export class MasterComponent{}