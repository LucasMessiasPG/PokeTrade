import {Component} from "@angular/core";
import {MaterializeCuston} from "../../services/materialize.service";
import {CardService} from "../../services/card.service";
import {User} from "../../services/user.service";
import {Router} from "@angular/router";
@Component({
    selector: 'poke-new-card-want',
    templateUrl: '/templates/card.new'
})
export class NewCardWantComponent {

    public new_card;
    public sets;
    public filter;
    public selectCard;
    private optionField = true;
    private cardsFilter;

    constructor(private materialize:MaterializeCuston,
                private user:User,
                private router:Router,
                private cardService:CardService,) {
        if (!this.user.checkLogin())
            this.router.navigateByUrl('/login');
    }

    ngOnInit() {
        this.new_card = {
            foil: '',
            id_set: '',
            id_card: '',
            pp: '',
            amount: ''
        };
        this.filter = {
            id_set: '',
            name: '',
            number: ''
        };

        this.cardService.getSets()
            .subscribe(response => {
                this.sets = response
                setTimeout(()=> {
                    this.materialize.select('select[name=set]')
                }, 100)
            });

    }

    selectCardF(card) {
        this.selectCard = card;
        setTimeout(()=> {
            this.materialize.tooltip();
        }, 10)
    }

    searchCard(model) {
        model.id_set = this.materialize.getValSelect();
        model.limit = 15;
        this.cardService.getCards(model)
            .subscribe(res => {
                this.cardsFilter = res
                setTimeout(()=> {
                    this.materialize.box();
                }, 100)
            })
    }

    backPage(){
        this.router.navigateByUrl('/want-list')
    }

    addNewCard(new_card) {
        var error = false;

        if (!new_card || new_card && !new_card.pp) {
            error = true;
            this.materialize.toast('PokePoint is required')
        }

        if (!new_card || new_card && !new_card.amount || new_card && new_card.amount && new_card.amount > 10) {
            error = true;
            this.materialize.toast('Amount min 1 and max 10')
        }

        if (new_card && new_card.pp && new_card.pp > 100000) {
            error = true;
            this.materialize.toast('Max PokePoint Overpast')
        }

        if (error == false) {
            var card = {
                'foil': (new_card.foil) ? new_card.foil : false,
                'reverse_foil': (new_card.reverse_foil) ? new_card.reverse_foil : false,
                'pp': new_card.pp,
                'amount': new_card.amount,
                'id_card': this.selectCard.id_card
            }

            this.user.addWant(card)
                .subscribe(res => {
                    if (res.status && res.status == 'success') {
                        this.materialize.toast('Successfully')
                        this.user.getWantCards(true)
                            .subscribe(res => {
                                this.router.navigateByUrl('/want-list')
                            });
                    } else {
                        if (res.msg) {
                            this.materialize.toast(res.msg)
                            throw 'Erro ' + res.msg;
                        } else {
                            throw 'Erro'
                        }
                    }
                })
        }
    }
}