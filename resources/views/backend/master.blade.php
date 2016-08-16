<!DOCTYPE html>
<html>
<head>
    <title>PokeTrade</title>
    <link rel="stylesheet" href="/css/font-awesome.min.css">
    <link rel="stylesheet" href="/css/materialize.css">
    <link rel="stylesheet" href="/css/app.css">
    <base href="/"/>
</head>
<body>
<poke>Carregando ...</poke>
@include('backend.scripts')
@if(!\Auth::check())
    <script>
        localStorage.removeItem('user');
    </script>
@endif
</body>

</html>
