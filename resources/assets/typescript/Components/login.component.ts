import {Component} from "@angular/core";
import {User} from "../Services/user.service";
import {Router} from "@angular/router";
import {MaterializeCuston} from "../Services/materialize.service";
declare var $:any;
@Component({
    selector:'poke-login',
    templateUrl:'/templates/login'
})
export class LoginComponent{
    private user = {login:'',password:''}
    private user_new = {login:'',email:'',password:'',password_confirmation:''}
    private email;

    constructor(
        private _user: User,
        private materialize: MaterializeCuston,
        private _router: Router,
    ){}

    ngOnInit(){
        this.materialize.modal();
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
                    this.materialize.modal('#register',true);
                    location.reload();
                }
            })
    }

    recuperarSenha(email){
        console.log(email);
    }
}