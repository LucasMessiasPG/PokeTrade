<nav>
    <div class="nav-wrapper">
        <a  routerLink="/home" class="brand-logo">PokeTrade.com</a>
        <a data-activates="mobile" class="button-collapse"><i class="material-icons">menu</i></a>
        <!-- Full Menu -->
        <ul class="right hide-on-med-and-down">
            <li routerLinkActive="active"><a routerLink="/search" >Search</a></li>
            <li routerLinkActive="active"><a routerLink="/list" >List</a></li>
            <li routerLinkActive="active"><a routerLink="/trades" >Trades</a></li>
            <li routerLinkActive="active"><a routerLink="/my-cards">My Cards</a></li>
            <li><a routerLink="/home">Buy</a></li>
            <li><a class="dropdown-button" data-activates="message">Message <i class="material-icons right">arrow_drop_down</i></a></li>
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
            <li><a routerLink="/home">History</a></li>
        </ul>

        <!-- Dropdown Menu Perfil -->
        <ul id="perfil_user" class="dropdown-content">
            <li><a routerLink="/home">Profile</a></li>
            <li class="divider"></li>
            <li><a href="/logout">Logout</a></li>
        </ul>

        <!-- Responsive Menu -->
        <ul class="side-nav" id="mobile">
            <li routerLinkActive="active"><a routerLink="/search" >Search</a></li>
            <li routerLinkActive="active"><a routerLink="/list" >List</a></li>
            <li routerLinkActive="active"><a routerLink="/trades" >Trade</a></li>
        </ul>
    </div>
</nav>