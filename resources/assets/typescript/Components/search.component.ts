import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {CardComponent} from "./card/card.component"
import {CardService} from "../services/card.service";
declare var $:any;

@Component({
    selector: 'poke-search',
    templateUrl: '/templates/search',
    directives: [CardComponent]
})
export class SearchComponent {
    private list_card;
    private table_row;
    public filter = {set_name: '', name: '', number: ''};

    constructor(
                private router:Router,
                private cardService: CardService
    ) {
        this.list_card = []
        this.table_row = 4;
    }

    ngOnInit() {
        var path = this.router.url.split('?')[1];
        if (path) {
            var convert = path.split('&');
            for (var i in convert) {
                var temp_convert = convert[i].split('=');
                if (temp_convert[0] == 'name' || temp_convert[0] == 'set_name' || temp_convert[0] == 'number') {
                    this.filter[temp_convert[0]] = temp_convert[1];
                }
            }
            this.searchCards(this.filter)
        }
    }


    searchCards(filter) {
        this.cardService.getCards(filter)
            .subscribe(res => {this.list_card = res});
    }
}
