import {Component} from "@angular/core";
import {PokeZoomDirective} from "../../directives/pokeZoom.directive";
@Component({
    selector: 'poke-card-template',
    template: `
    <div class="single-card" *ngIf="single_card">
        <div>
            <span><strong>{{ single_card.name }}</strong></span>
        </div>
        <div pokeZoom>
            <img class="img-responsive"  src="{{ single_card.image_url }}" alt="">
        </div>
        <div *ngIf="show_info" class="display-info">
            <p>Number: {{ single_card.card_set }}</p>
            <p>Set: {{ single_card.set }}</p>
        </div>
    </div>
    `,
    directives:[PokeZoomDirective],
    inputs: ['single_card'],
    styles:[`
    .single-card img{
        max-height: 200px !important;
    }
    .display-info{
        height: 100px;
    }
    `]
})
export class CardTemplateComponent {
    private single_card;
    private show_info;

    constructor(){
        if(!this.show_info)
            this.show_info = true;
    }
}