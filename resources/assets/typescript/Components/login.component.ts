import {Component} from "@angular/core";
import {User} from "../services/user.service";
import {Router} from "@angular/router";
import {Modal} from "../services/modal.service";
declare var $:any;
@Component({
    selector:'poke-login',
    templateUrl:'/templates/login'
})
export class LoginComponent{
    private user = {login:'',password:''}
    private user_new = {login:'',email:'',password:'',password_confirmation:''}

    constructor(
        private _user: User,
        private _modal: Modal,
        private _router: Router,
    ){}

    ngOnInit(){
        this._modal.init();
        if(this._user.login && this._user.email)
            this._router.navigateByUrl('/home')
    }

    login(user){
        this._user.makeLogin(user)
    }

    newUser(user){
        this._user.register(user)
            .subscribe(res => {
                if(res) {
                    this._modal.close('#register');
                    location.reload();
                }
            })
    }
}