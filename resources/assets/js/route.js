(function () {
    'use strict';

    angular
        .module('pokecard')
        .config(RouterConfig);

    RouterConfig.$inject = ['PokeProvider'];
    function RouterConfig(PokeProvider) {
        PokeProvider.route('/home','HomeController','hc');
        PokeProvider.route('/trade','TradeController','trade');
        PokeProvider.route('/my-cards','MyCardsController','myCards');
        PokeProvider.route('/search','SearchController','search');
        PokeProvider.route('/new-card','NewCardController','newCard');
    }
})();