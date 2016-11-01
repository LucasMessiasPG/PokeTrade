<!DOCTYPE HTML>
<html lang="en" ng-app="pokecard">
<head>
    <base href="/">
    <meta name="viewport" content="initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>PokeCard</title>
    <link rel="stylesheet" href="css/app.css">
</head>
<body ng-controller="MasterController as master" ng-cloak>
<header>
    <nav>
        <div class="container user">
            <div class="right" ng-show="master.user">
                <a href="/user" ng-bind="master.user.login+' ('+(master.user.pp?master.user.pp:0)+')'"></a>
                <a href="/logout">Logout</a>
            </div>
            <div class="right" ng-show="!master.user">
                <a href="/login">Login</a>
            </div>
        </div>
        <div class="menu">
            <div class="nav-wrapper">

                <a href="/home" class="brand-logo">PokeCard</a>
                <a href="#" data-activates="mobile" class="button-collapse"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/search">Search</a></li>
                    <li><a href="/trade">Trades</a></li>
                    <li><a href="/want">My Wants</a></li>
                    <li><a href="/my-cards">My Cards</a></li>
                    <li><a href="/buy">Buy PP</a></li>
                </ul>
            </div>
        </div>

    </nav>

</header>

<ul class="side-nav" id="mobile">
    <li><a href="/home">Home</a></li>
    <li><a href="/search">Search</a></li>
    <li><a href="/trade">Trades</a></li>
    <li><a href="/want">My Wants</a></li>
    <li><a href="/my-cards">My Cards</a></li>
    <li><a href="/buy">Buy PP</a></li>
</ul>
<main>
    <div class="container body">
        <div class="row" ng-view></div>
    </div>
</main>
<footer>
    <div class="footer-copyright">
        <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
    </div>
</footer>
@include('scripts')
</body>
</html>