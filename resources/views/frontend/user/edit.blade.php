<div class="container">
    <div class="row" *ngIf="user_profile">
        <div class="col s12 m2 center-align margin-top">
            <img class="img-profile" src="{{ (user_profile == false)?user_profile.img:'/img/user-default.png' }}" alt="">
        </div>
        <div class="col s6 m7">
            <h3>{{ user_profile.login }}</h3>
            <p>{{ user_profile.pp }}</p>
        </div>
        <div class="col s6 m3 margingit pull
        -top right-align">
            <button [routerLink]="['/profile',user.id_user]" class="btn waves-light waves-effect">Profile</button>
        </div>

        <div class="col s12 margin-top">
            <form>
                <div class="input-field col s12 m4">
                    <input id="andress" type="text" class="validate" minlength="6" maxlength="20" required name="andress" [(ngModel)]="user_profile.andress">
                    <label data-error="wrong" data-success="right" for="andress" [ngClass]="{'active':user_profile.andress}">Andress</label>
                </div>
                <div class="input-field col s12 m2">
                    <input id="number" type="text" class="validate" maxlength="20" required name="number" [(ngModel)]="user_profile.number">
                    <label data-error="wrong" data-success="right" for="number" [ngClass]="{'active':user_profile.number}">Number</label>
                </div>
                <div class="input-field col s12 m3">
                    <input id="district" type="text" class="validate" maxlength="20" required name="district" [(ngModel)]="user_profile.district">
                    <label data-error="wrong" data-success="right" for="district" [ngClass]="{'active':user_profile.district}">District</label>
                </div>
                <div class="input-field col s12 m3">
                    <input id="country" type="text" class="validate" maxlength="20" required name="country" [(ngModel)]="user_profile.country">
                    <label data-error="wrong" data-success="right" for="country" [ngClass]="{'active':user_profile.country}">Country</label>
                </div>
            </form>
        </div>
    </div>
</div>