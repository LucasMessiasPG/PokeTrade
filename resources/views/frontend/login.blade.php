<div class="container row">
    <form autocomplete="off" class="col offset-s3 s6 margin-top" (submit)="login(user)">
        <div class="input-field col s6">
            <input id="login" type="text" class="validate" minlength="6" maxlength="20" required name="login" [(ngModel)]="user.login">
            <label data-error="wrong" data-success="right" for="login" [ngClass]="{'active':user.login.length > 0}">Login</label>
        </div>
        <div class="input-field col s6">
            <input id="password" type="password" class="validate" minlength="6" maxlength="20" required name="password" [(ngModel)]="user.password">
            <label data-error="wrong" data-success="right" for="password" [ngClass]="{'active':user.password.length > 0}">Password</label>
        </div>
        <div class="col s12 login group-button">
            <button type="submit" class="waves-effect waves-light btn">Login</button>
            <a href="#register" class="waves-effect waves-light btn blue modal-trigger">Register</a>
        </div>
    </form>
</div>

<!-- Modal Structure -->
<div id="register" class="modal">
    <div class="modal-content">
        <h4>Register</h4>
        <form autocomplete="off" (submit)="newUser(user_new)" class="row">
            <div class="input-field col s12">
                <input id="login" type="text" class="validate" minlength="6" maxlength="20" required name="login" [(ngModel)]="user_new.login">
                <label data-error="wrong" data-success="right" for="login">Login</label>
            </div>
            <div class="input-field col s12">
                <input id="email" type="text" class="validate" minlength="6" maxlength="150" required name="login" [(ngModel)]="user_new.email">
                <label data-error="wrong" data-success="right" for="email">Email</label>
            </div>
            <div class="input-field col s6">
                <input id="password" type="password" class="validate" minlength="6" maxlength="20" required name="password" [(ngModel)]="user_new.password">
                <label data-error="wrong" data-success="right" for="password">Password</label>
            </div>
            <div class="input-field col s6">
                <input id="password_confirmation" type="password" class="validate" minlength="6" maxlength="20" required name="password" [(ngModel)]="user_new.password_confirmation">
                <label data-error="wrong" data-success="right" for="password_confirmation">Confirmation Password</label>
            </div>
            <div class="margin-top">
                <button type="submit" class="waves-effect waves-green btn-flat right">Confirm</button>
            </div>
        </form>
    </div>
</div>