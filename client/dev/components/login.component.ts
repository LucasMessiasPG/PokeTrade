import {Component} from "@angular/core";
@Component({
    selector:'poke-login',
    template:`
    <div class="container panel text-center">
      <form (submit)="getLogin(login)" class="col-sm-8 col-sm-offset-2 margin-top">
        <label class="control-label" class="col-sm-6">Login
          <input class="form-control" type="text" [(ngModel)]="user.login">
        </label>
        <label class="control-label" class="col-sm-6">Password
          <input class="form-control"  type="password" [(ngModel)]="user.password">
        </label>
        <div class="col-sm-12 text-right ">
            <div class="btn-group ">
                <button type="button" class="btn btn-info">Register</button>
                <button type="submit" class="btn btn-success">Submit</button>
            </div>
        </div>
      </form>
    </div>
    `,
})
export class LoginComponent{
    public user;

    getLogin(login){
        console.log(login);
    }

}