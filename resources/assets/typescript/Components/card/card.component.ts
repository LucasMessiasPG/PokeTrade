import {Component, Input, Output, HostListener, ElementRef} from "@angular/core";
import {MaterializeCuston} from "../../Services/materialize.service";
declare var $:any;
@Component({
    selector:'poke-card',
    templateUrl: '/templates/card.card',
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