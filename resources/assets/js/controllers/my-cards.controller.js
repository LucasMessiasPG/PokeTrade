(function(){
    'use strick';


    angular
        .module('pokecard.controller')
        .controller('MyCardsController', MyCardsController)

    MyCardsController.$inject = [];
    function MyCardsController() {
        var myCards = this;
        console.log('MyCardsController');
    }

})();