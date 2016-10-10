(function() {
    'use strict';

    angular
        .module('pokecard.controller')
        .controller('TradeController', TradeController)

    TradeController.$inject = ["SearchService","UserService"];
    function TradeController(SearchService,UserService) {
        var trade = this;
        trade.user = UserService.user;

        init();

        ////////////

        function init(){
        	SearchService.trades()
        		.then(function(response){
        			trade.list = response.data;
        		})
        }
    }
})();