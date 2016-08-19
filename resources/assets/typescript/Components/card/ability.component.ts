import {Component} from "@angular/core";
@Component({
    selector:'poke-ability',
    template:`
    <p><img class="ability-img" src="/img/ability.png" alt=""> {{ single_ability.name }}</p>
    <p>{{ single_ability.text }}</p>
    `,
    inputs:['single_ability']
})
export class AbilityComponent{}