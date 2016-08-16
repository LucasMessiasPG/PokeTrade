import {Component} from "@angular/core";
import {User} from "../services/user.service";
import {Toast} from "../services/toast.service";
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
    ) {}

    ngOnInit() {
        if(this.user.checkLogin())
            this.user.emitLogin();

        this.user_id = this.user.id_user;
        $(document).ready(function () {
            $(".button-collapse").sideNav();
            $(".dropdown-button").dropdown({
                    inDuration: 300,
                    outDuration: 225,
                    constrain_width: false, // Does not change width of dropdown to that of the activator
                    hover: false, // Activate on hover
                    gutter: 0, // Spacing from edge
                    belowOrigin: true, // Displays dropdown below the button
                    alignment: 'left' // Displays dropdown with edge aligned to the left of button
                }
            );
        })

    }

    public setShowTutorial(check)
    {
        if(check)
            this.user.tutorial(true)
    }
}