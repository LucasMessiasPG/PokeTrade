import {Injectable, EventEmitter} from "@angular/core";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {MaterializeCuston} from "./materialize.service";
declare var link:any;
@Injectable()
export class User {
    private tutorial_show = false
    public login$:EventEmitter<any>;
    public cards$:EventEmitter<any>;
    public id_user;
    public pp;
    public login;
    public email;
    public cards;
    private want;
    private _url = link;

    constructor(
        private http: Http,
        private materialize: MaterializeCuston,
        private router: Router,
    ) {
        this.login$ = new EventEmitter();
        this.cards$ = new EventEmitter();
    }

    public checkLogin() {
        if (this.checkStorage()) {
            return true;
        }
        return false;
    }

    public getWantCards(force?){
        if(!force) {
            if (this.want) {
                return new Observable(observer => {
                    observer.next(this.want);
                })
            }
        }

        var url = this._url + 'api/want-list';
        return this.http.get(url)
            .map(res => {
                var response = res.json();
                if (User.checkResponse(response, url)) {
                    this.want = response.data;
                    return response.data;
                }
                if(response.msg)
                    this.materialize.toast(response.msg)
                throw 'Erro';
            })
    }

    public getMyCards(force?) {

        if(!force) {
            if (this.cards) {
                return new Observable(observer => {
                    observer.next(this.cards);
                })
            }
        }

        var url = this._url + 'api/my-cards';
        return this.http.get(url)
            .map(res => {
                var response = res.json();
                if (User.checkResponse(response, url)) {
                    this.cards = response.data;
                    return response.data;
                }
                if(response.msg)
                    this.materialize.toast(response.msg)
                throw 'Erro';
            })
    }

    public getMessage(filter?) {
        var param = '';
        for (var i in filter) {
            if (filter[i] != '') {
                if (param == '')
                    param = i + '=' + filter[i];
                else
                    param += '&' + i + '=' + filter[i];
            }
        }

        var url = this._url + 'api/my-messages'+((param != '')?'?'+param:'');
        return this.http.get(url)
            .map(res => {
                var response = res.json();
                if (User.checkResponse(response, url)) {
                    return response.data;
                }
                if(response.msg) {
                    this.materialize.toast(response.msg)
                    throw 'Erro: '+response.msg;
                }
                throw 'Erro';
            })
    }

    private static checkResponse(response, url) {
        if (!response.status || response.status && response.status == 'error')
            throw 'Error response ' + url;

        if (response.status == 'success')
            return true;
    }

    public makeLogin(user) {
        if (this.checkStorage())
            return this.emitLogin();

        this.http.post(this._url + 'login-user', user)
            .subscribe(res => {
                var response = res.json();
                if (response.user) {
                    this.id_user = response.user.id_user;
                    this.email = response.user.email;
                    this.login = response.user.login;
                    this.pp = response.user.pp;
                    console.log(response.user);
                    localStorage.setItem('user', JSON.stringify(response));
                    this.router.navigateByUrl('/home')
                    location.reload();
                }else {
                    if (response.warning)
                        this.materialize.toast(response.warning)
                }

            })
    }

    public emitLogin() {
        return this.login$.emit({email: this.email, login: this.login, cache: 2})
    }

    private checkStorage() {
        if (localStorage.getItem('user')) {
            var local_user = JSON.parse(localStorage.getItem('user'));

            if(local_user.tutorial && this.tutorial_show == false) {
                this.materialize.modal('#tutorial')
                this.tutorial_show = true;
            }
            if (local_user.user.login && local_user.user.email) {
                this.id_user = local_user.user.id_user;
                this.email = local_user.user.email;
                this.login = local_user.user.login;
                this.pp = local_user.user.pp;
                return true;
            }
        }
        return false;
    }

    public register(user) {
        return this.http.post(this._url + 'register-user', user)
            .map(res => {
                var response = res.json();
                if (response.user) {
                    this.id_user = response.user.id_user;
                    this.email = response.user.email;
                    this.login = response.user.login;
                    this.pp = response.user.pp;
                    localStorage.setItem('user', JSON.stringify(response));
                    return true;
                }
                return false;

            })
    }

    public tutorial(b:boolean) {
        if(b)
            this.http.get(this._url + 'user/tutorial/1').subscribe(res => {})
        else
            this.http.get(this._url + 'user/tutorial/0').subscribe(res => {})

        if(localStorage.getItem('user')) {
            var temp_user = JSON.parse(localStorage.getItem('user'));

            if(temp_user.tutorial)
                temp_user.tutorial = !b;

            localStorage.setItem('user',JSON.stringify(temp_user));
        }
    }

    public getProfile(id_user) {
        return this.http.get(this._url + 'user/profile/'+id_user)
            .map(res => {
                var response = res.json();
                if(response.user){
                    return response.user
                }else{
                    if(response.warning)
                        this.materialize.toast(response.warning)
                }
            })
    }

    addWant(card) {
        return this.http.post(this._url + 'api/user/add-want',card)
            .map(res => {
                return res.json()
            })
    }

    public addCard(card) {
        return this.http.post(this._url + 'api/user/add-card',card)
            .map(res => {
                return res.json();
            })
    }

    removeWant(card) {
        return this.http.get(this._url + 'api/user/'+card.id_want+'/remove-want')
            .map(res => {
                return res.json();
            })
    }

    editWant(param) {
        return this.http.post(this._url + 'api/user/'+param.id_want+'/edit-want',param)
            .map(res => {
                return res.json();
            })
    }

    send(want) {
        return this.http.post(this._url+'api/user/send-want',want)
            .map(res => {
                return res.json();
            })
    }
}