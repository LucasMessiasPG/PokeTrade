import {Component} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Component({
    selector:'poke-body',
    template:`
    <div class="container">
        <div class="row">
            <div class="col-lg-5">
                <div class="list-group">
                <a href="#" class="list-group-item">
                    <h4 class="list-group-item-heading">Recents Trades</h4>
                </a>
                <div class="max-height list-card">
                    <div class="list-group-item col-lg-4" *ngFor="let card of list_cards; let i = index">
                            <img src="{{ card.imageUrl }}" alt="">
                            <div>
                                <span><strong>{{ card.name }}</strong></span>
                            </div>
                            <div>
                                <span>Set: {{ card.set }}</span>
                            </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="col-lg-7">
                content 2
            </div>
            <div class="col-lg-12">
                content 3
            </div>
        </div>
    </div>
    `,
    styles:[`
    .max-height{
        max-height: 500px;
        overflow: auto;
    }
    .list-card>div{
        font-size: 11px;
        height: 230px;
    }
    .list-card>div>img{
        width: 100%;
    }
    `]
})
export class BodyComponent{

    private list_cards;

    constructor(_http: Http){
        _http.get('card.example.json')
            .subscribe(res => {
                this.list_cards = res.json().cards
                console.log(this.list_cards);
            })

    }
}