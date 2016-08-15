import {Injectable, EventEmitter} from "@angular/core";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Rx";

@Injectable()
export class User {
    public login$:EventEmitter<any>;
    public cards$:EventEmitter<any>;
    public login;
    public email;
    public cards;

    constructor(private http:Http, private router:Router) {
        this.login$ = new EventEmitter();
        this.cards$ = new EventEmitter();
    }

    public checkLogin() {
        if (this.checkStorage()) {
            return true;
        }
        return false;
    }

    public getCards() {

        if (this.cards) {
            return new Observable(observer => {
                observer.next(this.cards);
            })
        }

        var url = 'http://localhost:8000/' + 'api/my-cards';
        return this.http.get(url)
            .map(res => {
                var response = res.json();
                if (this.checkResponse(response, url)) {
                    this.cards = response.data;
                    return response.data;
                }
                throw 'Erro';
            })
    }

    private checkResponse(response, url) {
        if (!response.status || response.status && response.status == 'error')
            throw 'Error response ' + url;

        if (response.status == 'success')
            return true;
    }

    public makeLogin(user) {
        if (this.checkStorage())
            return this.emitLogin();

        this.http.post('http://localhost:8000/' + 'login-user', user)
            .subscribe(res => {
                var response = res.json();
                if (response.user) {
                    this.email = response.user.email;
                    this.login = response.user.login;
                    localStorage.setItem('user', JSON.stringify(response));
                    this.router.navigateByUrl('/home')
                    location.reload();
                }

            })
    }

    public emitLogin() {
        return this.login$.emit({email: this.email, login: this.login, cache: 2})
    }

    private checkStorage() {
        if (localStorage.getItem('user')) {
            var local_user = JSON.parse(localStorage.getItem('user'));
            if (local_user.user.login && local_user.user.email) {
                this.email = local_user.user.email;
                this.login = local_user.user.login;
                return true;
            }
        }
        return false;
    }
}