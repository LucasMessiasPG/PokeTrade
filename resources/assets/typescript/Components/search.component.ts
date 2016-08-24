import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {CardComponent} from "./card/card.component"
import {CardService} from "../Services/card.service";
import {MaterializeCuston} from "../Services/materialize.service";
declare var $:any;

@Component({
    selector: 'poke-search',
    templateUrl: '/templates/search',
    directives: [CardComponent]
})
export class SearchComponent {
    private list_card;
    private table_row;
    public filter = {set_name: '', name: '', number: '', id_set: ''};
    private sets;

    constructor(
                private router:Router,
                private cardService: CardService,
                private materialize: MaterializeCuston
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
                }else if(temp_convert[0] == 'id_set'){
                    this.filter.id_set = temp_convert[1]+'';
                    this.materialize.getValSelect('select[name=set]',+temp_convert[1]);
                    this.materialize.select('select[name=set]');
                }
            }
            this.searchCards(this.filter)
        }

        this.cardService.getSets()
            .subscribe(response => {
                this.sets = response
                setTimeout(()=>{
                    this.materialize.select('select[name=set]')
                    if(this.filter.id_set) {
                        this.materialize.getValSelect('select[name=set]', this.filter.id_set);
                        this.materialize.select('select[name=set]')
                    }
                },100)
            });
    }


    searchCards(filter) {

        if(this.materialize.getValSelect() != null)
            filter.id_set = this.materialize.getValSelect();

        this.cardService.getCards(filter)
            .subscribe(res => {this.list_card = res});
    }
}
