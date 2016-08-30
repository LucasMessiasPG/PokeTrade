<div class="parallax-container" [style.height.px]="heightScreen">
    <div class="parallax background-home"></div>
    <div class="row">
        <div class="right-align home col s12 m6 " *ngIf="data">
            <ul id="list-cards" class="center-on-small-only" *ngIf="data">
                <li><h2>Bem vindo ao PokeCard</h2></li>
                <li><p class="no-margin">Aqui voce pode trocar suas cartas de pokemon</p></li>
                <li>No momento temos <strong>{{ data.wants }}</strong> cartas desejadas</li>
                <li>E <strong>{{ data.trades }}</strong> trocas finalizadas</li>
                <li>E <strong>{{ data.sends }}</strong> cartas sendo enviadas</li>
                <li>
                    <div *ngIf="!user.login">
                        <p class="no-margin">Faça o <a routerLink="/login" class="btn waves-effect waves-light">registro</a> e mande suas cartas hoje mesmo</p>
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
        <li style="opacity: 0;"><p><strong>PokePoint</strong> è a moeda virtual</p></li>
        <li style="opacity: 0;"><p>Serve para solicatar cartas que voce precisa</p></li>
        <li style="opacity: 0;"><p>Envie varias cartas para acumular <strong>PokePoint</strong></p></li>
    </ul>
</div>
<div class="parallax-container">
    <div class="parallax background-home"></div>
    <div class="center home">
        <h2>Ache as cartas que voce esta purando</h2>
        <h2>Envie as cartas que estão sobrando</h2>
    </div>
</div>
<div class="container">
    <p class="center"> <a routerLink="/login" class="btn waves-effect waves-light">Registrar</a></p>
</div>