import {Injectable, EventEmitter} from "@angular/core";
import {Http} from "@angular/http";
import {Router} from "@angular/router";

@Injectable()
export class User{
    public login$: EventEmitter<any>;
    public login;
    public email;
    private all;

    constructor(private http: Http, private router: Router){
        this.login$ = new EventEmitter();
    }

    public checkLogin(){
        if(this.checkStorage())
            this.emitLogin();
        return false;
    }

    public makeLogin(user){
        if(this.checkStorage())
            return this.emitLogin();

        this.http.post('http://localhost:8000/'+'login-user',user)
            .subscribe(res => {
                var response = res.json();
                if(response.user){
                    this.email = response.user.email;
                    this.login = response.user.login;
                    localStorage.setItem('user',JSON.stringify(response));
                    this.router.navigateByUrl('/home')
                    location.reload();
                }

            })
    }

    public emitLogin(){
        return this.login$.emit({email:this.email,login:this.login,cache:2})
    }

    private checkStorage() {
        if(localStorage.getItem('user')){
            var local_user = JSON.parse(localStorage.getItem('user'));
            if(local_user.user.login && local_user.user.email) {
                this.email = local_user.user.email;
                this.login = local_user.user.login;
                return true;
            }
        }
        return false;
    }
}