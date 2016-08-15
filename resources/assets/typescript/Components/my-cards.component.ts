import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {User} from "../services/user.service";
@Component({
    selector: 'poke-my-cards',
    templateUrl: '/templates/my_cards'
})
export class MyCardsComponents{

    private cards;

    constructor(
        private router: Router,
        private user: User,
    ){
        if(!this.user.checkLogin())
            this.router.navigateByUrl('/login');
    }

    ngOnInit()
    {
        this.user.getCards()
            .subscribe(cards => {
                this.cards = cards;
            });
    }
}