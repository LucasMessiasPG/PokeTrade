import {Component} from "@angular/core";
@Component({
    selector:'poke-weaknesses',
    template:`
    <div class="margin-top">
        Weakness: 
        <span class="no-margin" *ngFor="let single_weaknesses of weaknesses">
            <span class="type">
              <span class="img {{ single_weaknesses.type }}" title="{{ single_weaknesses.type }}"></span>
            </span>
          <span>{{ single_weaknesses.value }}</span>
        </span>
    </div>
    `,
    inputs:['weaknesses']
})
export class WeaknessesComponent{}