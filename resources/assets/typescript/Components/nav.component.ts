import {Component} from "@angular/core";
declare var jQuery:any;
@Component({
    selector:'poke-nav',
    templateUrl: '/templates/nav'
})
export class NavComponent{

    constructor() {
    }

    ngOnInit(){
        jQuery(".button-collapse").sideNav();

    }
}