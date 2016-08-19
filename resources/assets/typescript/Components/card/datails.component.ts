import {Component} from "@angular/core";
import {CardService} from "../../services/card.service";
import {Router, ActivatedRoute} from "@angular/router";
@Component({
    selector:'poke-datails',
    templateUrl:'/templates/card.datails'
})

export class DatailsComponent{
    private card;

    constructor(
      private cardService: CardService,
      private route: ActivatedRoute
    ){
        this.route.params.subscribe(res => {
            this.cardService.getDatailsCard(res['id'])
                .subscribe(card => {
                    this.card = card;
                })

        })
    }

    ngOnInit()
    {

    }
}