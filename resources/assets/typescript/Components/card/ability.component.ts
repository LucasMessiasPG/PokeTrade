import {Component} from "@angular/core";
@Component({
    selector:'poke-ability',
    template:`
    <div *ngFor="let single_ability of ability">
        <p class="no-margin">
            <span><img class="ability-img" src="/img/ability.png" alt=""> {{ single_ability.name }}</span>
        </p>
        <p class="no-margin">{{ single_ability.text }}</p>
    </div>
    `,
    inputs:['ability']
})
export class AbilityComponent{}