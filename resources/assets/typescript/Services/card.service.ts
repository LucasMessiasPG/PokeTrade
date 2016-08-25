import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {MaterializeCuston} from "./materialize.service";
import {Router} from "@angular/router";
@Injectable()
export class CardService {
    private sets;
    private _url = 'http://localhost:8000/';
    // private _url = 'http://192.168.1.11:8000/';

    constructor(private http:Http,
                private router: Router,
                private materialize:MaterializeCuston
    ) {
    }


    public getSets(force?:boolean) {
        if (!force) {
            if (this.sets) {
                return new Observable(observer => {
                    observer.next(this.sets);
                })
            }
        }

        var url = this._url + 'api/sets';
        return this.http.get(url)
            .map(res => {
                var response = res.json();
                if (CardService.checkResponse(response, url)) {
                    this.sets = response.data;
                    return response.data;
                }
                if (response.msg) {
                    this.materialize.toast(response.msg)
                    throw 'Erro '+response.msg;
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

    public getCards(filter?,redirect?) {
        var param = '';
        for (var i in filter) {
            if (filter[i] != '') {
                if (param == '')
                    param = i + '=' + filter[i];
                else
                    param += '&' + i + '=' + filter[i];
            }
        }

        var url = this._url + 'api/search';

        if(redirect !== false)
            this.router.navigateByUrl('/search?' + param);

        return this.http.get(url + ((param) ? '/?' + param : ''))
            .map(res => {
                var response = res.json();
                if (CardService.checkResponse(response, url)) {
                    return response.data;
                }

                if (response.msg) {
                    this.materialize.toast(response.msg)
                    throw 'Erro '+response.msg;
                }

                throw 'Erro';
            });
    }

    getDetailsCard(filter) {
        var id_card = filter;
        if(filter.id_card)
            id_card = filter.id_card

        var url = this._url+'api/card/'+id_card+'/details';

        return this.http.get(url)
            .map(res => {
                var response = res.json();
                if (CardService.checkResponse(response, url)) {
                    return response.data;
                }

                if (response.msg) {
                    this.materialize.toast(response.msg)
                    throw 'Erro '+response.msg;
                }

                throw 'Erro';
            })
    }

    getWants(offset) {
        var url = this._url+'api/card/wants?offset='+offset;
        return this.http.get(url)
            .map(res => { return res.json()})
    }

    dataHome() {
        var url = this._url+'api/home-data';
        return this.http.get(url)
            .map(res => {
                var response = res.json();
                if (CardService.checkResponse(response, url)) {
                    return response.data;
                }

                if (response.msg) {
                    this.materialize.toast(response.msg)
                    throw 'Erro '+response.msg;
                }

                throw 'Erro';
            })
    }
}