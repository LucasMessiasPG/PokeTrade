(function(){
	"use strict";

	module.exports = angular.module("pokecard.trade.module",[
		require('../../common/list/list.component'),
		require('../../services/user.service'),
		require('../../services/search.service'),
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
	function controller(UserService,SearchService){
		 var trade = this;
        trade.user = UserService.user;
        trade.showButton = showButton;
        trade.classButton = classButton;
        trade.have = have;
        trade.searchTrades = searchTrades;

        trade.$onInit = function(){
            UserService.getUser()
                .then(function(user){
                    trade.user = user;
                });
        };

        ////////////

        function showButton(button,item) {
            if(!item)
                return;

            if(!trade.user)
                return false;

            switch (button){
                case 'Complete':
                    return item.user_from.id_user == trade.user.id_user;
                    break;
                case 'Problem':
                    return (item.user.id_user == trade.user.id_user || item.user_from.id_user == trade.user.id_user);
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
            if(count == 2)
                classe.m4 = true;
            else if(count == 1)
                classe.m6 = true;
            else if(count == 0)
                classe.m12 = true;
            console.log("classe",classe,item,trade.user);
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
	}

})();