import {Component} from "@angular/core";
import {CardService} from "../../services/card.service";
import {Router, ActivatedRoute} from "@angular/router";
import {MaterializeCuston} from "../../services/materialize.service";
@Component({
    selector:'poke-details',
    templateUrl:'/templates/card.details'
})

export class DetailsComponent{
    private card;

    constructor(
      private cardService: CardService,
      private materialize: MaterializeCuston,
      private route: ActivatedRoute
    ){
        this.route.params.subscribe(res => {
            this.cardService.getDetailsCard(res['id'])
                .subscribe(card => {
                    this.card = card;
                    setTimeout(()=>{
                        this.materialize.box()
                    },10)
                })

        })
    }

    ngOnInit()
    {

    }
}