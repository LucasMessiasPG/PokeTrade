(function() {
    'use strict';

    angular
        .module('pokecard.controller')
        .controller('TradeController', TradeController)

    TradeController.$inject = ["SearchService","UserService"];
    function TradeController(SearchService,UserService) {
        var trade = this;
        trade.user = UserService.user;
        trade.showButton = showButton;
        trade.classButton = classButton;
        trade.have = have;
        trade.searchTrades = searchTrades;

        init();

        ////////////

        function init(){
            trade.searchTrades();
        }

        function showButton(button,item) {
            if(!trade.user)
                return false;

            switch (button){
                case 'Complete':
                    return item.user.id_user == trade.user.id_user;
                    break;
                case 'Problem':
                    return (item.user.id_user == trade.user.id_user || item.user_from.id_user == trade.user.id_user);
                    break;
            }
        }

        function classButton(item){
            var count = 0;
            if(trade.user) {
                if (item.user.id_user == trade.user.id_user || item.user_from.id_user == trade.user.id_user)
                    count++;
                if (item.user.id_user == trade.user.id_user)
                    count++;
            }

            var classe = {};
            if(count == 2)
                classe.m4 = true;
            else if(count == 1)
                classe.m6 = true;
            else if(count == 0)
                classe.m12 = true;

            return classe;
        }

        function have(status) {
            var filter;
            if(status)
                filter = {have:true};
            trade.searchTrades(filter);
        }

        function searchTrades(filter){
            SearchService.trades(filter)
                .then(function(response){
                    trade.list = response.data;
                })
        }

    }
})();