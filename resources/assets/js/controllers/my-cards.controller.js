(function(){
    'use strict';


    angular
        .module('pokecard.controller')
        .controller('MyCardsController', MyCardsController)

    MyCardsController.$inject = ['UserService'];
    function MyCardsController(UserService) {
        var myCards = this;

        init();

        /////////////

        function init(){
            UserService.getMyCards()
                .then(function(response){
                    myCards.cards = response.data;
                })
        }

    }

})();