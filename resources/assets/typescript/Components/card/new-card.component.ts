import {Component} from "@angular/core";
import {MaterializeCuston} from "../../services/materialize.service";
import {CardService} from "../../services/card.service";
import {User} from "../../services/user.service";
@Component({
    selector:'poke-new-card',
    templateUrl:'/templates/card.new'
})
export class NewCardComponent{

    public new_card;
    public sets;
    public filter;
    public selectCard;
    private cardsFilter;

    constructor(
      private materialize: MaterializeCuston,
      private cardService: CardService,
    ){}

    ngOnInit()
    {
        this.new_card = {
            foil:'',
            id_set:'',
            id_card:'',
            price:'',
            amount:''
        };
        this.filter = {
            id_set:'',
            name:'',
            number:''
        };

        this.cardService.getSets()
            .subscribe(response => {
                this.sets = response
                setTimeout(()=>{
                    this.materialize.select('select[name=set]')
                },100)
            });

    }

    searchCard(model)
    {
        model.id_set = this.materialize.getValSelect();
        model.limit = 15;
        this.cardService.getCards(model)
            .subscribe(res => {
                this.cardsFilter = res
                setTimeout(()=>{
                    this.materialize.box();
                },100)
            })
    }
}