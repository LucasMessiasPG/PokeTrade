import {Component, EventEmitter} from "@angular/core";
import {CardService} from "../Services/card.service";
import {MaterializeCuston} from "../Services/materialize.service";
import {User} from "../Services/user.service";
@Component({
    selector:'poke-trades',
    templateUrl:'/templates/trades'
})
export class TradesComponent{

    private list_want
    private filtro
    public filter$ = new EventEmitter()

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
            setTimeout(()=>{
                this.materialize.tooltip();
                this.materialize.box();
            },100)
        })
    }

    clearFilter(){
        this.filtro = {
            name:'',
            have:'',
            number:''
        };
    }


}