import {Component, EventEmitter, NgZone} from "@angular/core";
import {CardService} from "../Services/card.service";
import {MaterializeCuston} from "../Services/materialize.service";
import {User} from "../Services/user.service";
import {PaginationControlsCmp, PaginationService} from "ng2-pagination/index";
import {PaginateComponent} from "./template/paginate";
@Component({
    selector: 'poke-trades',
    templateUrl: '/templates/trades',
    directives: [PaginationControlsCmp, PaginateComponent]
})
export class TradesComponent {

    private list_want
    private filtro
    private p;
    public filter$ = new EventEmitter()
    private width;
    private height;
    private count = 0;
    private searching = false;

    constructor(private user: User,
                private card: CardService,
                private materialize: MaterializeCuston,
                private pagination: PaginationService,
                private ngZone: NgZone
    ) {
        this.filtro = {
            name: '',
            have: '',
            number: ''
        };

        this.card.getWants(0)
            .subscribe(res => {
                this.list_want = res.data;
                setTimeout(()=> {
                    this.materialize.tooltip();
                    this.materialize.box();
                }, 100)
            })

        window.addEventListener("scroll",(event) => {
            var top = window.scrollY;
            var doc = document.documentElement;
            var percentagem = (top*100)/doc.offsetHeight;
            if(percentagem > 50) {
                if(this.count != null) {
                    if(this.searching == false) {
                        this.count++;
                        this.searching = true;
                        this.card.getWants((this.count * 30))
                            .subscribe(res => {

                                if (!res.data)
                                    return this.count = null;

                                for (var i in res.data)
                                    this.list_want.push(res.data[i]);

                                this.searching = false;
                                setTimeout(()=> {
                                    this.materialize.tooltip();
                                    this.materialize.box();
                                }, 100)
                            })
                    }
                }
            }
        }, false);
    }

    clearFilter() {
        this.filtro = {
            name: '',
            have: '',
            number: ''
        };
    }

    sendCard(want) {
        this.user.send(want)
        console.log(want);
    }


}