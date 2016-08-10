import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {URLSearchParams, Http} from "@angular/http";
import {CardTemplateComponent} from "./template/card.component";
@Component({
    selector: 'poke-search',
    template: `
    <div class="container panel">
        <div class="col-lg-12">
            <h4 class="col-lg-12">Filtro</h4>
            <form (ngSubmit)="searchCard(card)" #f="ngForm">
                <label class="col-lg-6">Card Name
                    <input class="form-control" type="text" [(ngModel)]="card.name">
                </label>
                <label class="col-lg-2">Card number
                    <input class="form-control" type="text" [(ngModel)]="card.number">
                </label>
                <div class="col-lg-4">
                    <button type="submit" class="btn btn-info margin-top">Pesquisar</button>
                </div>
            </form>
        </div>
        <hr/>
        <div class="col-lg-12" *ngIf="!noPropertis">
            <div class="col-lg-2 col-sm-4 col-xs-12" *ngFor="let card of list_cards">
                <poke-card-template [single_card]="card"></poke-card-template>
            </div>
        </div>
        <div class="col-lg-12" *ngIf="noPropertis">
            <p>No Result to show</p>
        </div>
    </div>
    `,
    directives: [CardTemplateComponent]
})
export class SearchComponent {
    public list_cards: Array<any>;
    public card;
    public search;
    public noPropertis = true;

    constructor(private http:Http,private router: Router) {
        this.search = this.parseQuery(window.location.search);
        this.card = {};
        this.searchCard(this.search)
    }

    public parseQuery(qstr) {
        var query = {};
        var a = qstr.substr(1).split('&');
        for (var i = 0; i < a.length; i++) {
            var b = a[i].split('=');
            if(b[0] != '')
                query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
        }
        return query;
    }


    public searchCard(card) {
        var query = '?';
        var search = false;
        var param = new URLSearchParams();
        if(Object.keys(card).length == 0)
            return ;

        for (var i = 0; i < Object.keys(card).length; i++) {
            var key = Object.keys(card)[i];
            if (card[key] && card[key] != '') {
                search = true;
                param.set(Object.keys(card)[i], card[key]);
                if(query.length > 1){
                    query += '&';
                }
                query += Object.keys(card)[i]+'='+card[key];

            }
        }
        this.router.navigateByUrl('search' + query)
        if(search) {
            this.http.get('http://localhost:8000/api/v1/search', {
                search: param
            })
                .subscribe(res => {
                    this.list_cards = res.json()
                    if (this.list_cards.length == 0)
                        this.noPropertis = true;
                    else
                        this.noPropertis = false;

                })
        }else{
            this.list_cards = [];
            this.noPropertis = true;
        }
    }
}