import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Env} from "../providers/env.provider";
@Injectable()
export class User {
    private user;

    constructor(http: Http, env: Env) {
    }
}