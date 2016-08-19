import {Component} from "@angular/core";
import {User} from "../services/user.service";
import {MaterializeCuston} from "../services/materialize.service";
declare var $:any;
@Component({
    selector: 'poke-nav',
    templateUrl: '/templates/nav',
})
export class NavComponent {
    public user_id;

    public showTutorial = false;

    constructor(
        private user: User,
        private materialize: MaterializeCuston
    ) {}

    ngOnInit() {
        if(this.user.checkLogin())
            this.user.emitLogin();

        this.user_id = this.user.id_user;

        setTimeout(()=>{
            this.materialize.dropdown()
            this.materialize.sidenav()
        },100)

    }

    public setShowTutorial(check)
    {
        if(check)
            this.user.tutorial(true)
    }
}