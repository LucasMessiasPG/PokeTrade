import {Component} from "@angular/core";
@Component({
    selector:'poke-retreat-cost',
    template:`
    <div class="margin-top">
        <p class="no-margin">
            Retreat: 
            <span class="type" *ngFor="let cost of retreat">
              <span class="img {{cost.type}}" title="{{cost.type}}"></span>
            </span>
        </p>
    </div>
    `,
    inputs:['retreat']
})
export class RetreatCostComponent{}