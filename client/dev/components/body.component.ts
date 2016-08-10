import {Component} from "@angular/core";
import {Http, Headers, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {CardTemplateComponent} from "./template/card.component";

@Component({
    selector: 'poke-body',
    directives: [CardTemplateComponent],
    templateUrl: 'app/components/body.html',
    styles: [`
    .max-height{
        max-height: 500px;
        overflow: auto;
    }
    .list-card>div{
        font-size: 11px;
        height: 230px;
    }
    `]
})
export class BodyComponent {

    private list_cards;

    constructor(_http:Http) {

        var param = new URLSearchParams();
        param.set('name','pikachu')

        _http.get('http://localhost:8000/api/v1/search',{
            search:param
        })
            .subscribe(res => {
                this.list_cards = res.json()
            })

    }
}