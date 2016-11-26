(function(){
	"use strict";

	module.exports = angular.module("pokecard.trade.module",[
		require('../../common/list/list.component'),
		require('../../services/user.service'),
		require('../../services/search.service'),
        require('../../common/modal/ratings/ratings')
	])
		.component("pokeTrade",{
			template: /*@ngInject*/ function($templateCache){
				return $templateCache.get("trade/trade.html");
			},
			controller: controller,
			controllerAs: "trade"
		})
		.name;

	/*@ngInject*/
	function controller(UserService, SearchService, ratingsService){
		 var trade = this;
        trade.user = UserService.user;
        trade.showButton = showButton;
        trade.classButton = classButton;
        trade.have = have;
        trade.complete = complete;
        trade.searchTrades = searchTrades;
        trade.selectRateing = selectRateing;
        trade.finishRating = finishRating;

        trade.$onInit = function(){
            UserService.getUser()
                .then(function(user){
                    trade.user = user;
                });

            trade.ratings = require('./ratings-data.js');
        };

        ////////////

        function showButton(button,item) {
            if(!item)
                return false;

            if(!trade.user)
                return false;

            switch (button){
                case 'Complete':
                    return (item.user.id_user == trade.user.id_user && item.status == "sending");
                    break;
                case 'Problem':
                    return (item.user.id_user == trade.user.id_user || item.user_from.id_user == trade.user.id_user && item.status == "sending");
                    break;
            }
        }

        function classButton(item){
            if(!item)
                return;

            var count = 0;
            if(trade.user) {
                if (item.user.id_user == trade.user.id_user || item.user_from.id_user == trade.user.id_user)
                    count++;
                if (item.user_from.id_user == trade.user.id_user)
                    count++;
            }

            var classe = {};
            if(count === 2){
                classe.m4 = true;
            }else if(count === 1)
                classe.m6 = true;
            else if(count === 0)
                classe.m12 = true;
            console.log("classe",count);
            return classe;
        }

        function have(status) {
            var filter;
            if(status)
                filter = {have:true};
            trade.searchTrades(filter);
        }

        function searchTrades(filter){
            trade._filter = filter;
        }

        function complete(item){
            trade.item_rating = item;
            $("#ratings").modal("open")
        }

        function selectRateing(ratings,rating){
            for(var i in ratings){
                if(ratings[i].value <= rating.value){
                    ratings[i].check = true;
                }else{
                    ratings[i].check = false;
                }
            }

            ratings[6] = {
                description: rating.description,
                _value: rating.value,
            }
        }

        function finishRating(ratings){
            var check  = [];
            for(var i in ratings){
                check.push({
                    description: ratings[i].description,
                    rating: ratings[i].ratings[6]._value
                })
            }
            UserService.completeTrade(trade.item_rating,check)
                .then(function(response){
                    if(response.status == "success"){
                        $("#ratings").modal("close")
                        trade._filter = {
                            refresh: true
                        };
                    }
                });
            
        }
	}

})();