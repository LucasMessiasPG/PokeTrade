import {Component} from "@angular/core";
@Component({
    selector: 'poke-attack',
    template: `
    <div class="margin-top">
        <p class="no-margin">
            <span class="type" *ngFor="let cost of single_attack.cost.reverse()">
              <span class="img {{cost.type}}" title="{{cost.type}}"></span>
            </span>
            <strong>{{single_attack.name}}</strong>
            <span *ngIf="single_attack.damage"> - <strong>{{ single_attack.damage }}</strong></span> 
        </p>
        <p class="no-margin">{{single_attack.text}}</p>
    </div>
    `,
    inputs:['single_attack']
})
export class AttackComponent{}