import {Component, Input, Output, HostListener, ElementRef} from "@angular/core";
declare var $:any;
@Component({
    selector:'poke-card',
    template:`
    <div class="padding-min center margin-top">
        <img title="{{ card.name }}" class="responsive-img" src="{{ card.image_url }}" alt="{{ card.name }}">
        <!--<div class="card-info">-->
            <!--<h5>{{ card.name }}</h5>-->
            <!--<p>{{ card.set }}</p>-->
            <!--<p>{{ card.card_set }}</p>-->
            <!--<div class="btn-group-card">-->
                <!--<button class="btn-small waves-effect waves-light btn">Details</button>-->
                <!--<button class="btn-small waves-effect waves-light btn">Have</button>-->
                <!--<button class="btn-small waves-effect waves-light btn">Whant</button>-->
            <!--</div>-->
            <!--<table class="centered bordered table-card">-->
                <!--<tr>-->
                    <!--<td>40</td>-->
                    <!--<td><i class="material-icons">trending_up</i></td>-->
                <!--</tr>-->
                <!--<tr>-->
                    <!--<td>20</td>-->
                    <!--<td><i class="material-icons">trending_down</i></td>-->
                <!--</tr>-->
                <!--<tr>-->
                    <!--<td>23</td>-->
                    <!--<td><i class="material-icons">query_builder</i></td>-->
                <!--</tr>-->
            <!--</table>-->
        <!--</div>-->
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