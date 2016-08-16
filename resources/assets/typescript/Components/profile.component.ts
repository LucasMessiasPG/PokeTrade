import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {User} from "../services/user.service";
@Component({
    selector: 'poke-profile',
    templateUrl: '/templates/profile'
})
export class ProfileComponent{
    private id_user;
    public user_profile;

    constructor(
        private route: ActivatedRoute,
        private user: User,
    ){}

    ngOnInit(){
        this.route.params.subscribe(res => {
            this.id_user = +res['id']
            this.user.getProfile(this.id_user)
                .subscribe(res => {
                    if(res)
                        this.user_profile = res
                })
        })
    }
}