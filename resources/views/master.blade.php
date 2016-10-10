<!DOCTYPE HTML>
<html lang="en" ng-app="pokecard">
<head>
    <base href="/">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>PokeCard</title>
    <link rel="stylesheet" href="vendor/materialize/css/materialize.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="css/app.css">
</head>
<body ng-controller="MasterController as master" ng-cloak>
<header>
    <nav>
        <div class="container user">
            <div class="right" ng-show="master.user">
                <a href="/user" ng-bind="master.user.login"></a>
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
{{--<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.8/socket.io.js"></script>--}}
{{--<script>--}}
{{--var socket = io('https://future.pucatrade.com:443');--}}

{{--socket.on("list.want.update", function (message) {--}}
{{--console.log(1, message);--}}
{{--});--}}
{{--socket.on("user.points.change", function (message) {--}}
{{--console.log(2, message);--}}
{{--});--}}
{{--socket.on("user.unlocked", function (message) {--}}
{{--console.log(3, message);--}}
{{--});--}}
{{--socket.on("list.want.delete", function (message) {--}}
{{--console.log(4, message);--}}
{{--});--}}
{{--socket.on("user.locked", function (message) {--}}
{{--console.log(5, message);--}}
{{--});--}}
{{--</script>--}}

@include('scripts')
</body>
</html>