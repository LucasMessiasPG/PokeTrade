<div class="container row">
    <form autocomplete="off" class="col offset-s3 s6 margin-top login" (submit)="login(user)">
        <div class="input-field col s12 m6">
            <input title="Login" id="login" type="text" class="validate" minlength="6" maxlength="20" required name="login" [(ngModel)]="user.login">
            <label data-error="wrong" data-success="right" for="login" [ngClass]="{'active':user.login.length > 0}">Login</label>
        </div>
        <div class="input-field col s12 m6">
            <input title="Senha" id="password" type="password" class="validate" minlength="6" maxlength="20" required name="password" [(ngModel)]="user.password">
            <label data-error="wrong" data-success="right" for="password" [ngClass]="{'active':user.password.length > 0}">Senha</label>
        </div>
        <div class="col s12 login group-button">
            <a href="#forget-password" class="left modal-trigger">Recuperar senha</a>
            <button type="submit" class="waves-effect waves-light btn">Login</button>
            <a href="#register" class="waves-effect waves-light btn teal lighten-1 modal-trigger">Registrar</a>
        </div>
    </form>
</div>

<!-- Modal Structure -->
<div id="register" class="modal">
    <div class="modal-content">
        <h4>Registro</h4>
        <form autocomplete="off" (submit)="newUser(user_new)" class="row">
            <div class="input-field col s12">
                <input title="Login" id="login" type="text" class="validate" minlength="6" maxlength="20" required name="login" [(ngModel)]="user_new.login">
                <label data-error="wrong" data-success="right" for="login">Login</label>
            </div>
            <div class="input-field col s12">
                <input title="Email" id="email" type="text" class="validate" minlength="6" maxlength="150" required name="login" [(ngModel)]="user_new.email">
                <label data-error="wrong" data-success="right" for="email">Email</label>
            </div>
            <div class="input-field col s6">
                <input title="Senha" id="password" type="password" class="validate" minlength="6" maxlength="20" required name="password" [(ngModel)]="user_new.password">
                <label data-error="wrong" data-success="right" for="password">Senha</label>
            </div>
            <div class="input-field col s6">
                <input title="Confirmar Senha" id="password_confirmation" type="password" class="validate" minlength="6" maxlength="20" required name="password" [(ngModel)]="user_new.password_confirmation">
                <label data-error="wrong" data-success="right" for="password_confirmation">Confirmar Senha</label>
            </div>
            <div class="margin-top">
                <button type="submit" class="waves-effect waves-green btn-flat right">Confirmar</button>
            </div>
        </form>
    </div>
</div>

<div id="forget-password" class="modal">
    <div class="modal-content">
        <h4>Recupera Senha</h4>
        <form autocomplete="off" (submit)="recuperarSenha(email)" class="row">
            <div class="input-field col s12">
                <input title="Email" id="email" type="email" class="validate" minlength="6" maxlength="50" required name="email" [(ngModel)]="email">
                <label data-error="wrong" data-success="right" for="email">Email</label>
            </div>
            <div class="margin-top">
                <button type="submit" class="waves-effect waves-green btn-flat right">Enviar</button>
            </div>
        </form>
    </div>
</div>