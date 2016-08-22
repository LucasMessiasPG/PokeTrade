import {Component, EventEmitter} from "@angular/core";
import {CardService} from "../Services/card.service";
import {MaterializeCuston} from "../Services/materialize.service";
import {User} from "../Services/user.service";
import {PaginationControlsCmp} from "ng2-pagination/index";
@Component({
    selector:'poke-trades',
    templateUrl:'/templates/trades',
    directives:[PaginationControlsCmp]
})
export class TradesComponent{

    private list_want
    private filtro
    private p;
    public filter$ = new EventEmitter()
    private heigth;

    constructor(
        private user: User,
        private card: CardService,
        private materialize: MaterializeCuston
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

        this.filter$.subscribe(()=>{
            this.p = 1;
            setTimeout(()=>{
                this.materialize.tooltip();
                this.materialize.box();
            },100)
        })
    }

    ngOnInit(){
        this.heigth = (document.body.offsetHeight - (document.body.offsetHeight / 2.5));
    }

    clearFilter(){
        this.filtro = {
            name:'',
            have:'',
            number:''
        };
    }


}