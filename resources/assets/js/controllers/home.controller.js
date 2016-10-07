(function(){
    'use strict';

    angular
        .module('pokecard.controller')
        .controller('HomeController',HomeController);

    HomeController.$inject = ['SearchService'];
    function HomeController(SearchService) {

        var home = this;

        init();

        ////////////////

        function init(){
            SearchService.lastTrades()
                .then(function(response){
                    home.trades = response;
                });
        }

    }

})();