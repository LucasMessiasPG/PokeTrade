<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="initial-scale=1">
    <link rel="canonical" href="pokecard.com.br">
    <title>PokeCard</title>
    <link rel="stylesheet" href="/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="/css/materialize.css">
    <link rel="stylesheet" href="/css/app.css">
    <base href="/"/>
</head>
<body>
<poke>
    <div class="background-loading row center-align">
        <img class="hide-on-med-and-down" src="/img/pikachu2.png" alt="">
        <div class="hide-on-large-only">
            <svg class="spin" xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewBox="25 25 50 50">
                <path d="M 30 50
		a 1 1 1 0 1 40 0
		h-12.5
		a 1 1 1 0 0 -15 0
		z"
                      fill="#f00" stroke="#222"
                ></path>
                <circle
                        cx="50"
                        cy="50"
                        r="5"
                        fill="#222" stroke="#222"
                ></circle>
                <path d="M 30 50
		a 1 1 1 0 0 40 0
		h-12.5
		a 1 1 1 0 1 -15 0
		z"
                      fill="#fff" stroke="#222"
                ></path>
            </svg>
        </div>
        <h1>Carregando ... </h1>
    </div>
</poke>
@include('backend.scripts')
@if(!\Auth::check())
    <script>
        localStorage.removeItem('user');
    </script>
@endif
<script>
    link = '<% env("LINK") %>'
</script>
</body>

</html>
