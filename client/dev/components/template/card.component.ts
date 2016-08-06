import {Component} from "@angular/core";
@Component({
    selector: 'poke-card-template',
    template: `
    <div class="single-card" *ngIf="single_card">
        <img src="{{ single_card.image_url }}" alt="">
        <div>
            <span><strong>{{ single_card.name }}</strong></span>
        </div>
        <div>
            <span>Set: {{ single_card.set }}</span>
        </div>
    </div>
    `,
    inputs: ['single_card'],
    styles:[`
    .single-card img{
        width: 100%;
    }
    `]
})
export class CardTemplateComponent {
    private single_card;
    
}