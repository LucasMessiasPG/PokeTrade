(function(){
    'use strict';


    angular
    .module('pokecard.controller')
    .controller('MyCardsController', MyCardsController)

    MyCardsController.$inject = ['UserService','$location'];
    function MyCardsController(UserService,$location) {
        var myCards = this;
        myCards.remover = remover;

        if(UserService.checkLogin()){
            init();
        }else{
            $location.path('/home');
        }

        /////////////

        function init(){

            UserService.getMyCards()
            .then(function(response){
                if(response.data && response.data.card)
                    myCards.cards = response.data.card;
                if(response.data && response.data.total_cards)
                    myCards.total = response.data.total_cards;
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

        function remover(item){
            console.log(item);
            UserService.removeCard(item.id_user_card)
                .then(function(response){
                    if(response.status = 'success'){
                        myCards.cards.splice(myCards.cards.indexOf(item),1);
                        myCards.total--;
                    }   
                })
        }

    }

})();