import {Component} from "@angular/core";
import {User} from "../services/user.service";
import {Router} from "@angular/router";
@Component({
    selector:'poke-login',
    templateUrl:'/templates/login'
})
export class LoginComponent{
    private user = {login:'',password:''}

    constructor(private _user: User, private _router: Router){}

    ngOnInit(){
        if(this._user.login && this._user.email)
            this._router.navigateByUrl('/home')
    }

    login(user){
        this._user.makeLogin(user)
    }
}