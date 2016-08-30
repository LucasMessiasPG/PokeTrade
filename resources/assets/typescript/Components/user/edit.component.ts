import {Component} from "@angular/core";
import {User} from "../../Services/user.service";
@Component({
    selector:'poke-edit-user',
    templateUrl: '/templates/user.edit'
})
export class EditUserComponent{
    private user_profile;
    constructor(
        private user : User
    ){
        this.user.getProfile(this.user.id_user)
            .subscribe(res => {
                this.user_profile = res;
            })
    }
}