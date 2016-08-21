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
    private message;
    private message_trade;

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

        this.user.getMyCards()
            .subscribe(cards => {
                this.cards = cards;

                setTimeout(()=> {
                    this.materialize.box();
                    this.materialize.modal();
                    this.materialize.select();
                }, 100)
            });

        var filter = {
            id_status_message: [2,4],
            last:true
        };
        this.user.getMessage(filter)
            .subscribe(messages => {
                for(var i in messages) {
                    var m_trade = false
                    var m = false
                    if(messages[i].id_status_message == 4 && m_trade === false) {
                        this.message_trade = messages[i]
                        m_trade = true;
                    }
                    if(messages[i].id_status_message == 2 && m === false) {
                        this.message = messages[i];
                        m = true;
                    }
                    if(m === true && m_trade === true)
                        break;
                }
            })
    }

    public addCard()
    {
        this.router.navigateByUrl('/my-cards/new')
    }



}