(function() {
    'use strick';

    angular
        .module('pokecard.controller')
        .controller('TradeController', TradeController)

    TradeController.$inject = [];
    function TradeController() {
        var trade = this;
        console.log('Trade');
    }
})();