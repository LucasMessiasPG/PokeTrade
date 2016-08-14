import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {CardComponent} from "./card/card.component"
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

    constructor(private http:Http,
                private router:Router) {
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


    searchCards(filtro) {
        var param = '';
        for (var i in filtro) {
            if (filtro[i] != '') {
                if (param == '')
                    param = i + '=' + filtro[i];
                else
                    param += '&' + i + '=' + filtro[i];
            }
        }

        this.router.navigateByUrl('/search?' + param);

        if (param == '')
            return true;

        this.http.get('api/search?' + param)
            .subscribe(res => {
                this.list_card = res.json();
            })
    }

    getHeight(tes2){
        console.log(tes2);
    }

}
