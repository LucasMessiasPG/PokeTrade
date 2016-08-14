<div class="container row">
    <form class="col offset-s3 s6 margin-top" (submit)="login(user)">
        <div class="input-field col s6">
            <input id="login" type="text" class="validate" minlength="6" maxlength="20" required name="login" [(ngModel)]="user.login">
            <label data-error="wrong" data-success="right" for="login" [ngClass]="{'active':user.login.length > 0}">Login</label>
        </div>
        <div class="input-field col s6">
            <input id="password" type="password" class="validate" minlength="6" maxlength="20" required name="password" [(ngModel)]="user.password">
            <label data-error="wrong" data-success="right" for="password" [ngClass]="{'active':user.password.length > 0}">Password</label>
        </div>
        <div class="input-field col s12 m2">
            <button type="submit" class="waves-effect waves-light btn">Login</button>
        </div>
    </form>
</div>