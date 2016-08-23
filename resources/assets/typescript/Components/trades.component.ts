import {Component, EventEmitter} from "@angular/core";
import {CardService} from "../Services/card.service";
import {MaterializeCuston} from "../Services/materialize.service";
import {User} from "../Services/user.service";
import {PaginationControlsCmp, PaginationService} from "ng2-pagination/index";
import {PaginateComponent} from "./template/paginate";
@Component({
    selector:'poke-trades',
    templateUrl:'/templates/trades',
    directives:[PaginationControlsCmp,PaginateComponent]
})
export class TradesComponent{

    private list_want
    private filtro
    private p;
    public filter$ = new EventEmitter()

    constructor(
        private user: User,
        private card: CardService,
        private materialize: MaterializeCuston,
        private pagination: PaginationService
    ){
        this.filtro = {
            name:'',
            have:'',
            number:''
        };
        this.card.getWants()
            .subscribe(res => {
                this.list_want = res.data;
                setTimeout(()=>{
                    this.materialize.tooltip();
                    this.materialize.box();
                },100)
            })

        this.pagination.change.subscribe(() => {
            setTimeout(()=>{
                this.materialize.tooltip();
                this.materialize.box();
            },100)
        })
        this.filter$.subscribe(()=>{
            this.p = 1;
        })
    }

    clearFilter(){
        this.filtro = {
            name:'',
            have:'',
            number:''
        };
    }

    sendCard(want){
        this.user.send(want)
        console.log(want);
    }


}