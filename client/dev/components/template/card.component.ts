import {Component, HostListener} from "@angular/core";
import {PokeZoomDirective} from "../../directives/pokeZoom.directive";
@Component({
    selector: 'poke-card-template',
    template: `
    <div class="single-card" [style.height]="height" *ngIf="single_card">
        <img *ngIf="!show_info" [style.maxHeight]="height" class="img-responsive" src="{{ single_card.image_url }}" alt="">
        <div *ngIf="show_info" class="datails">
            <ul class="status">
                <li class="text-center title-card"><h4>{{ single_card.name+' (#'+single_card.card_set+')' }}</h4></li>
                <li><span>Set: {{ single_card.set }}</span></li>
                <li><span>Rarity: {{ single_card.rarity }}</span></li>               
            </ul>
            <div class="text-center margin-top">
                <div class="btn-group btn-group-xs">
                    <button class="btn btn-info">Datails</button>
                    <button class="btn btn-warning">Have</button>
                    <button class="btn btn-danger">Want</button>
                </div>
            </div>
            <div class="row text-center margin-top">
                <div class="col-xs-12">
                    <table class="table">
                        <tr>
                            <td class="text-right td-margin-top"><i class="fa fa-rub"></i> <strong>100</strong></td>
                            <td class="text-left"><i class="fa fa-arrow-circle-o-up fa-2x" title="Max price"></i></td>
                        </tr>
                        <tr>
                            <td class="text-right td-margin-top"><i class="fa fa-rub"></i> <strong>10</strong></td>
                            <td class="text-left"><i class="fa fa-arrow-circle-o-down fa-2x" title="Lower price"></i></td>
                        </tr>
                        <tr>
                            <td class="text-right td-margin-top"><i class="fa fa-rub"></i> <strong>70</strong></td>
                            <td class="text-left"><i class="fa fa-clock-o fa-2x" title="Recent"></i></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
    `,
    directives: [PokeZoomDirective],
    inputs: ['single_card', 'height'],
    styles: [`
    .single-card {
        margin: 10px;
        color: white;
    }
    .title-card{
        height: 45px;
    }
    
    .title-card>h4{
        font-size: 14px;
    }
    table{
        font-size: 12px;
        color: white;
        margin-bottom: 0px;
    }
    .td-margin-top{
        padding-top: 13px;
    }
    img{
        padding: 5px;
        margin: 0 auto;
    }
    
    .datails{
        background-color: #0f0f0f;
        border-radius: 10px;
        margin: 0 auto;
        padding: 5px;
        max-width: 200px;
    }
    ul{
        padding: 0px;
    }
    li{
        list-style: none;
    }
    li span{
        font-size: 12px;
    }
    .status{
        margin: 0 auto;
    }
    `]
})
export class CardTemplateComponent {
    private single_card;
    private show_info;

    @HostListener('mouseenter')eventMouseEnter() {
        this.show_info = true;
    }

    @HostListener('mouseleave')eventMouseLeave() {
        this.show_info = false;
    }

}