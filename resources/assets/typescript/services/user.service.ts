import {Injectable, EventEmitter} from "@angular/core";
import {Http} from "@angular/http";
@Injectable()
export class User{
    public login$: EventEmitter<any>;
    private login;
    private email;
    private all;

    constructor(private http: Http){
        this.login$ = new EventEmitter();
    }

    public makeLogin(user){
        if(this.email && this.login)
            return this.login$.emit({email:this.email,login:this.login,cache:2})

        this.http.post('http://localhost:8000/'+'login-user',user)
            .subscribe(res => {
                var response = res.json();
                if(response.user){
                    this.email = response.user.email;
                    this.login = response.user.login;
                    this.login$.emit(response.user);
                }

            })
    }
}