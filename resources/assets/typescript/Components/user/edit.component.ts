import {Component} from "@angular/core";
import {User} from "../../Services/user.service";
import {Router} from "@angular/router";
@Component({
    selector:'poke-edit-user',
    templateUrl: '/templates/user.edit'
})
export class EditUserComponent{
    private user_profile;
    constructor(
        private user : User,
        private router: Router
    ){
        if(!this.user.checkLogin())
            this.router.navigateByUrl('/login');
        else {
            this.user.getProfile(this.user.id_user)
                .subscribe(res => {
                    this.user_profile = res;
                })
        }
    }
}