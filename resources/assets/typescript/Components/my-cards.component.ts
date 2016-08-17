import {Component, ElementRef} from "@angular/core";
import {Router} from "@angular/router";
import {User} from "../services/user.service";
import {MaterializeCuston} from "../services/materialize.service";
declare var $:any;
@Component({
    selector: 'poke-my-cards',
    templateUrl: '/templates/my_cards'
})
export class MyCardsComponents{

    private cards;
    public new_card

    constructor(
        private router: Router,
        private user: User,
        private materialize: MaterializeCuston,
        private el: ElementRef
    ){
        if(!this.user.checkLogin())
            this.router.navigateByUrl('/login');
    }

    ngOnInit()
    {
        this.new_card = {
            foil:'',
            id_set:'',
            id_card:'',
            price:'',
            amount:1
        };

        if(this.user.checkLogin())
            this.user.getCards( )
                .subscribe(cards => {
                    this.cards = cards;

                    setTimeout(()=>{
                        this.materialize.box();
                        this.materialize.modal();
                        this.materialize.select();
                    },100)
                });
    }

    public addCard()
    {
        this.router.navigateByUrl('/my-cards/new')
    }


}