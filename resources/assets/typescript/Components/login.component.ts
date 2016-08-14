import {Component} from "@angular/core";
import {User} from "../services/user.service";
@Component({
    selector:'poke-login',
    templateUrl:'/templates/login'
})
export class LoginComponent{
    private user = {login:'',password:''}

    constructor(private _user: User){}

    ngOnInit(){
        this._user.login$.subscribe(user => {
            console.log(1,  user)
        })
    }

    login(user){
        this._user.makeLogin(user)
    }
}