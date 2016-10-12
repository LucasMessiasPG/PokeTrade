(function () {
    'use strict';

    angular
        .module('pokecard')
        .config(RouterConfig);

    RouterConfig.$inject = ['PokeProvider'];
    function RouterConfig(PokeProvider) {
        PokeProvider.route('/home','HomeController','home');
        PokeProvider.route('/user/:id_user?','UserController','user','user');
        PokeProvider.route('/login','LoginController','login');
        PokeProvider.route('/logout','LogoutController','logout');
        PokeProvider.route('/new-want','NewWantController','newWant');
        PokeProvider.route('/want','WantController','want');
        PokeProvider.route('/trade','TradeController','trade');
        PokeProvider.route('/my-cards','MyCardsController','myCards');
        PokeProvider.route('/search','SearchController','search');
        PokeProvider.route('/new-card','NewCardController','newCard');
        PokeProvider.route('/details/:id_card','DetailsController','details','details');
        PokeProvider.route('/trade/:id_history','TradeDetailsController','tradeDetails','trade-details');
    }
})();