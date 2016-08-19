<nav>
    <div class="nav-wrapper" id="nav">
        <a  routerLink="/home" class="brand-logo">PokeTrade.com</a>
        <a data-activates="mobile" class="button-collapse"><i class="material-icons">menu</i></a>
        <!-- Full Menu -->
        <ul class="right hide-on-med-and-down">
            <li routerLinkActive="active"><a routerLink="/search" >Search</a></li>
            <li routerLinkActive="active"><a routerLink="/list" >All Cards</a></li>
            <li routerLinkActive="active"><a routerLink="/trades" >Trades</a></li>
            <li routerLinkActive="active"><a routerLink="/my-cards">My Cards</a></li>
            <li><a routerLink="/home">Buy</a></li>
            <li routerLinkActive="active"><a class="dropdown-button" data-activates="message">Message <i class="material-icons right">arrow_drop_down</i></a></li>
            @if(\Auth::check())
            <li><a class="dropdown-button" data-activates="perfil_user"><span [innerHTML]="user.login[0].toUpperCase() + user.login.substring(1) "></span> <i class="material-icons right">arrow_drop_down</i></a></li>
            @else
            <li routerLinkActive="active"><a routerLink="/login" >Login</a></li>
            @endif
        </ul>

        <!-- Dropdown Menu -->
        <ul id="message" class="dropdown-content">
            <li><a class="disabled" routerLink="/home">Nothing to show here</a></li>
            <li class="divider"></li>
            <li routerLinkActive="active"><a routerLink="/historic">History</a></li>
        </ul>

        <!-- Dropdown Menu Perfil -->
        <ul id="perfil_user" class="dropdown-content">
            <li><a routerLink="/profile/{{ user.id_user }}">Profile</a></li>
            <li class="divider"></li>
            <li><a href="/logout">Logout</a></li>
        </ul>

        <!-- Responsive Menu -->
        <ul class="side-nav" id="mobile">
            <li routerLinkActive="active"><a routerLink="/search" >Search</a></li>
            <li routerLinkActive="active"><a routerLink="/list" >All Cards</a></li>
            <li routerLinkActive="active"><a routerLink="/trades" >Trade</a></li>
            <li routerLinkActive="active"><a routerLink="/my-cards">My Cards</a></li>
            <li><a routerLink="/home">Buy</a></li>
            @if(\Auth::check())
                <li><a href="/logout" >Logout</a></li>
            @else
                <li routerLinkActive="active"><a routerLink="/login" >Login</a></li>
            @endif
        </ul>
    </div>
</nav>

<!-- Modal Structure -->
<div id="tutorial" class="modal modal-fixed-footer">
    <div class="modal-content">
        <h4>Tutorial</h4>
        <p>texto e img com tutorial de como usar</p>
    </div>
    <div class="modal-footer row">
        <div class="input-field col s6 right">
            <input name="check" id="check" type="checkbox" value="0" [(ngModel)]="showTutorial">
            <label for="check">Don't show this tutorial again</label>
        </div>
        <div class="col s6">
            <a (click)="setShowTutorial(showTutorial)" class="modal-action modal-close waves-effect waves-green btn-flat ">Confirm</a>
        </div>
    </div>
</div>