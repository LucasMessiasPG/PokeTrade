import {Component, Input, Output, HostListener, ElementRef} from "@angular/core";
declare var $:any;
@Component({
    selector:'poke-card',
    template:`
    <div class="row">
       <div class="col s12">
            <a [routerLink]="['/details',card.id_card]">{{ card.name_card }}</a>
        </div>
       <div class="col s12">
            <img title="{{ card.name_card }}" class="materialboxed" src="{{ card.image_url }}" alt="{{ card.name_card }}">
        </div>
        
     </div>
    `,
})
export class CardComponent{
    @Input() card;
    @Output() height;
    private info;
    public show_detail;

    constructor(private el: ElementRef){
        this.show_detail = true;
    }

    ngOnInit(){
        $('.materialboxed').materialbox();
        if(!this.height)
            this.height = 500;
    }

    @HostListener('mouseover') onMouserEnter(){
        // this.show_detail = false;
    }

    @HostListener('mouseout') onMouserLeaver(){
        // this.show_detail = true;
    }

}