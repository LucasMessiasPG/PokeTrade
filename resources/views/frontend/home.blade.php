<div class="parallax-container" [style.height.px]="heightScreen">
    <div class="parallax background-home"></div>
    <div class="row">
        <div class="right-align home col s12 m6 " *ngIf="data">
            <ul id="list-cards" class="center-on-small-only" *ngIf="data">
                <li><h2>Welcome to PokeTrade</h2></li>
                <li><p class="no-margin">Here you can trade yours card than pokemon tcg</p></li>
                <li>Now we have <strong>{{ data.wants }}</strong> wants card </li>
                <li>And <strong>{{ data.trades }}</strong> trades successfully</li>
                <li>And <strong>{{ data.sends }}</strong> cards in coming</li>
                <li>
                    <div *ngIf="!user.login">
                        <p class="no-margin">Make <a routerLink="/login" class="btn waves-effect waves-light">register</a> and send you card for all word</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="col m6 hide-on-small-and-down" *ngIf="data">
            <img id="img-home-pikachu" class="img img-responsive home" src="/img/pikachu.png" alt="">
        </div>
    </div>
</div>
<div class="container">
    <div class="center margin-top">
        <img id="pokepoint" style="opacity: 0;" src="/img/pokecoins.png" alt="">
    </div>
    <ul id="pokepoint-text" class="center">
        <li style="opacity: 0;"><h2 class="home-h2">PokePoint</h2></li>
        <li style="opacity: 0;"><p><strong>PokePoint</strong> is the virtaul coin for pay cards</p></li>
        <li style="opacity: 0;"><p>This coin is only posibility you trade card here</p></li>
        <li style="opacity: 0;"><p>Send more card get more coin and get card so strong for you</p></li>
    </ul>
</div>
<div class="parallax-container">
    <div class="parallax background-home"></div>
    <div class="center home">
        <h2>Find everything you need in all WORLD</h2>
    </div>
</div>
<div class="container">
    <p class="center"> <a routerLink="/login" class="btn waves-effect waves-light">Register</a></p>
</div>