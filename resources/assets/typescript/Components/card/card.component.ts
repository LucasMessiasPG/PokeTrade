import {Component, Input, Output, HostListener, ElementRef} from "@angular/core";
import {MaterializeCuston} from "../../Services/materialize.service";
declare var $:any;
@Component({
    selector:'poke-card',
    template:`
    <div class="row single-card">
       <div class="col s6 left-align">
            <a [routerLink]="['/details',card.id_card]">{{ card.name_card }}</a>
            <p class="no-margin"><small>Set:</small> {{ card.set }}</p>
            <p class="no-margin"><small>Rarity:</small> {{ card.rarity }}</p>
            <div *ngIf="want">
              <ul class="no-margin">
                <li *ngIf="want.user"><small>Trainer:</small> <a [routerLink]="['/profile',want.user.id_user]">{{ want.user.login }}</a></li>
                <li><small>Foil:</small> <i class="fa" [class.fa-check]="want.foil" [class.fa-times]="!want.foil"></i></li>
                <li><small>Reverse Foil:</small> <i class="fa" [class.fa-check]="want.reverse_foil" [class.fa-times]="!want.reverse_foil"></i></li>
                <li><hr></li>
                <li><small>PokePoint:</small>  <i class="fa fa-rub"></i> <span class="pokepoint">{{ want.pp | PokePoint }}</span></li>
              </ul>
            </div>
        </div>
       <div class="col s6">
            <img title="{{ card.name_card }}" class="materialboxed" src="{{ card.image_url }}" alt="{{ card.name_card }}">
        </div>
        
     </div>
    `,
})
export class CardComponent{
    @Input() card;
    @Input() want;
    @Output() height;

    constructor(
        private el: ElementRef,
        private materialize: MaterializeCuston
    ){}

    ngOnInit(){
        this.materialize.box()
        this.materialize.tooltip()
    }

    @HostListener('mouseover') onMouserEnter(){
        // this.show_detail = false;
    }

    @HostListener('mouseout') onMouserLeaver(){
        // this.show_detail = true;
    }

}