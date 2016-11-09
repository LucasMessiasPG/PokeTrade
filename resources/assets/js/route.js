(function () {
    'use strict';

    angular
        .module('pokecard')
        .config(RouterConfig);

    RouterConfig.$inject = ['PokeProvider','$routeProvider'];
    function RouterConfig(PokeProvider,$routeProvider) {
        PokeProvider.route('/home','<poke-home></poke-home>');
        PokeProvider.route('/user/:id_user?','<poke-user></poke-user>');
        PokeProvider.route('/login','LoginController','login');
        PokeProvider.route('/logout','LogoutController','logout');
        PokeProvider.route('/new-want','NewWantController','newWant');
        PokeProvider.route('/want','<poke-want></poke-want>');
        PokeProvider.route('/trade','<poke-trade></poke-trade>');
        PokeProvider.route('/buy','BuyController','buy');
        PokeProvider.route('/my-cards','MyCardsController','myCards');
        PokeProvider.route('/search','<poke-search></poke-search>');
        PokeProvider.route('/new-card','NewCardController','newCard');
        PokeProvider.route('/details/:id_card','DetailsController','details','details');
        PokeProvider.route('/trade/:id_history','TradeDetailsController','tradeDetails','trade-details');
        PokeProvider.route('/teste-dev','DevTestController','dev');
    }
})();