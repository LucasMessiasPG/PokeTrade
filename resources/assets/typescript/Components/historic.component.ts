import {Component} from "@angular/core";
import {User} from "../services/user.service";
import {Router} from "@angular/router";
@Component({
    selector:'poke-historic',
    templateUrl:'/templates/historic'
})
export class HistoricComponent{
    private messages;
    private system;
    private trades;
    private logs;
    private cards;

    constructor(
        private user: User,
        private router: Router
    ){
        if(!this.user.checkLogin())
            this.router.navigateByUrl('/login');
    }

    ngOnInit()
    {
        this.messages = [];
        this.system = [];
        this.trades = [];
        this.logs = [];
        this.cards = [];
        this.user.getMessage()
            .subscribe(messages => {
                console.log(messages);
                for(var i in messages){
                    switch (messages[i].id_status_message){
                        case 2:
                            this.messages.push(messages[i])
                            break;
                        case 3:
                            this.system.push(messages[i])
                            break;
                        case 4:
                            this.trades.push(messages[i])
                            break;
                        case 5:
                            this.logs.push(messages[i])
                            break;
                        case 6:
                            this.cards.push(messages[i])
                            break;
                    }
                }
            })
    }

}