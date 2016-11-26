(function(){
	"use strict";

	module.exports = angular.module("pokecard.myCards.module",[])
		.component("pokeMyCards",{
			template: /*@ngInject*/ function($templateCache){
				return $templateCache.get("my-cards/my-cards.html");
			},
			controller: MyCardsController,
			controllerAs: "myCards"
		})
		.name;

	/*@ngInject*/
	function MyCardsController(UserService,$location){
		var myCards = this;
        myCards.remover = remover;

        if(UserService.checkLogin()){
            init();
        }else{
            $location.path('/login');
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