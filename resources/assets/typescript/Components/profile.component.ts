import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {User} from "../Services/user.service";
import {MaterializeCuston} from "../Services/materialize.service";
@Component({
    selector: 'poke-profile',
    templateUrl: '/templates/profile'
})
export class ProfileComponent{
    private id_user;
    public user_profile;
    private showTab;

    constructor(
        private route: ActivatedRoute,
        private user: User,
        private materialize: MaterializeCuston,
    ){}

    ngOnInit(){
        this.materialize.tabs();
        this.route.params.subscribe(res => {
            this.id_user = +res['id']
            this.user.getProfile(this.id_user)
                .subscribe(res => {
                    if(res) {
                        this.user_profile = res
                    }
                })
        })
    }
}