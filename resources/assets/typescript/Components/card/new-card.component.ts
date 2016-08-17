import {Component} from "@angular/core";
import {MaterializeCuston} from "../../services/materialize.service";
@Component({
    selector:'poke-new-card',
    templateUrl:'/templates/card.new'
})
export class NewCardComponent{

    public new_card;

    constructor(
      private materialize: MaterializeCuston
    ){}

    ngOnInit(){
        this.new_card = {
            foil:'',
            id_set:'',
            id_card:'',
            price:'',
            amount:''
        }
        this.materialize.select()

    }
}