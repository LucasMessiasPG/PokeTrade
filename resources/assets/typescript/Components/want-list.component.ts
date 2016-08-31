import {Component} from "@angular/core";
import {User} from "../Services/user.service";
import {MaterializeCuston} from "../Services/materialize.service";
import {Router} from "@angular/router";
@Component({
    selector: 'poke-want-list',
    templateUrl: '/templates/want_list'
})
export class WantListComponet {
    private cards;
    private action;
    private start = false;

    constructor(private user:User,
                private router: Router,
                private materialize:MaterializeCuston) {

    }

    ngOnInit() {
        if(!this.user.checkLogin())
            this.router.navigateByUrl('/login');
        else
            this.user.getWantCards()
                .subscribe(cards => {
                    this.start = true;
                    this.cards = cards;

                    setTimeout(()=> {
                        this.materialize.box();
                        this.materialize.modal();
                        this.materialize.select();
                    }, 100)
                });

    }

    removeWant(card) {
        this.user.removeWant(card)
            .subscribe(res => {
                this.refreshWant()
            })
    }

    refreshWant()
    {
        this.user.getWantCards(true)
            .subscribe(cards => {
                this.cards = cards;

                setTimeout(()=> {
                    this.materialize.box();
                    this.materialize.modal();
                    this.materialize.select();
                }, 100)
            });
    }

    editWant(card)
    {
        var error = false;
        if(!card.new_pp || card.new_pp == '') {
            this.materialize.toast('PokePoint is required')
            error = true;
        }

        if(card.new_pp && card.new_pp > 1000000) {
            this.materialize.toast('PokePoint invalid')
            error = true;
        }

        if(error == false){
            var param = {pp:card.new_pp,id_want:card.id_want};
            this.user.editWant(param)
                .subscribe(res => {
                    this.refreshWant()
                })
        }
    }

    setAction(item)
    {
        this.action = item;
    }
}