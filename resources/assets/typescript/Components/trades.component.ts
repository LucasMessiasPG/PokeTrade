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
    public filter$ = new EventEmitter()
    private count = 0;
    private searching = false;
    private sets;
    private have = false;
    private teste;

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
    this.teste = 1;
        this.card.getWants(0)
            .subscribe(res => {
    this.teste = 2;
                this.list_want = res.data;
                setTimeout(()=> {
    this.teste = 3;
                    this.materialize.tooltip();
                    this.materialize.box();
                }, 100)
            })

        this.card.getSets()
            .subscribe(response => {
                this.sets = response
                setTimeout(()=>{
                    this.materialize.select('select[name=set]')
                },100)
            });

        window.addEventListener("scroll",(event) => {
            var top = window.scrollY;
            var doc = document.documentElement;
            var percentagem = (top*100)/doc.offsetHeight;
            if(percentagem > 50) {
                if(this.count != null) {
                    if(this.searching == false) {
                        this.count++;
                        this.searching = true;
                        this.card.getWants((this.count * 30),this.filtro)
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

    filterCard(){
        this.card.getWants(0,this.filtro)
            .subscribe(res => {
                this.count = 1;
                this.list_want = [];
                if(res.data)
                    this.list_want = res.data

                setTimeout(()=> {
                    this.materialize.tooltip();
                    this.materialize.box();
                }, 100)
            })
    }

    onlyHave()
    {
        this.filtro.have = (!this.have)?'1':'0';
        this.card.getWants(0,this.filtro)
            .subscribe(res => {
                this.count = 1;
                this.list_want = [];
                if(res.data)
                    this.list_want = res.data

                setTimeout(()=> {
                    this.materialize.tooltip();
                    this.materialize.box();
                }, 100)
            })
    }

    sendCard(want) {
        this.user.send(want)
        console.log(want);
    }


}