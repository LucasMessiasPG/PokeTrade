<div class="col s12 card-background">
    <div class="col s12 l6 margin-top">
        <div class="img-card">
            <img class="valign materialboxed" src="{{ card.image_url }}" alt="">
        </div>
    </div>
    <div class="col s12 l6">
        <div class="info-card">
            <div class="col s12">
                <h4 class="center-align"><a [routerLink]="['/details',card.id_card]">{{ card.name_card }}</a></h4>
            </div>
            <div class="col s8 l12 offset-s2 center">
                <p>Trainer: <a [routerLink]="['/profile',want.user.id_user]">{{ want.user.login }}</a></p>
                <poke-point [value]="want.pp"></poke-point>
            </div>
            <div class="col s12 l12 center hide-on-med-and-up margin-bot">
                    <button class="btn waves-effect waves-light btn-large margin-top"><i class="material-icons">favorite</i></button>
                    <button class="btn waves-effect waves-light btn-large margin-top"><i class="material-icons">grade</i></button>
                    <button [disabled]="!want.have" class="btn waves-effect waves-light btn-large margin-top"><i class="material-icons">input</i></button>
            </div>
            <div class="col s12 l12 center hide-on-small-and-down margin-bot">
                <button class="btn waves-effect waves-light margin-top"><i class="material-icons">favorite</i></button>
                <button class="btn waves-effect waves-light margin-top"><i class="material-icons">grade</i></button>
                <button [disabled]="!want.have" class="btn waves-effect waves-light margin-top"><i class="material-icons">input</i></button>
            </div>
        </div>
    </div>
</div>