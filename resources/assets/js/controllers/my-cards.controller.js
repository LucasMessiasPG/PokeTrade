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
                });
            UserService.getLastMessages()
                .then(function (response) {
                    for(var i in response.data){
                        var data = response.data[i];
                        if(data.id_status_message == 2)
                            myCards.lastMessage = data;
                        if(data.id_status_message == 4)
                            myCards.lastTrade = data;
                    }
                });
        }

    }

})();