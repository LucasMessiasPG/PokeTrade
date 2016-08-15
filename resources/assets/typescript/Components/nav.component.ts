import {Component} from "@angular/core";
import {User} from "../services/user.service";
declare var $:any;
@Component({
    selector: 'poke-nav',
    templateUrl: '/templates/nav',
})
export class NavComponent {

    constructor(private user: User) {}

    ngOnInit() {
        this.user.checkLogin();
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
}