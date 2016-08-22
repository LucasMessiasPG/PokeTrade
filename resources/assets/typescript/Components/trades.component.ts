import {Component} from "@angular/core";
import {CardService} from "../services/card.service";
import {MaterializeCuston} from "../services/materialize.service";
import {User} from "../services/user.service";
@Component({
    selector:'poke-trades',
    templateUrl:'/templates/trades'
})
export class TradesComponent{

    private list_want

    constructor(
        private user: User,
        private card: CardService,
        private materialize: MaterializeCuston
    ){
        this.card.getWants()
            .subscribe(res => {
                this.list_want = res.data;
                setTimeout(()=>{
                    this.materialize.box();
                },100)
            })
    }


}