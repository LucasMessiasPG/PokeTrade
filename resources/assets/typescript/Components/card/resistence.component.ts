import {Component} from "@angular/core";
@Component({
    selector:'poke-resistances',
    template:`
    <div class="margin-top">
        Resistance: 
        <span class="no-margin">
            <span class="type">
              <span class="img {{ resistances.type }}" title="{{ resistances.type }}"></span>
            </span>
          <span>{{ resistances.value }}</span>
        </span>
    </div>
    `,
    inputs:['resistances']
})
export class ResistancesComponent{}