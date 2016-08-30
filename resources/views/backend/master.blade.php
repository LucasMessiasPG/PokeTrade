<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="initial-scale=1">
    <link rel="canonical" href="pokecard.com.br">
    <title>PokeCard</title>
    <link rel="stylesheet" href="/css/font-awesome.min.css">
    <link rel="stylesheet" href="/css/materialize.css">
    <link rel="stylesheet" href="/css/app.css">
    <base href="/"/>
</head>
<body>
<poke>
    <div class="background-loading row center-align">
        <img src="/img/pikachu2.png" alt="">
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
