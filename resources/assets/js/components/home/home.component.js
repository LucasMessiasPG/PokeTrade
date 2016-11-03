(function(){
	"use strict";

	module.exports = angular.module("pokecard.home.module",[
		require('../../common/list/list.component')
	])
		.component("pokeHome",{
			template: /*@ngInject*/ function($templateCache){
				return $templateCache.get("home/home.html");
			},
			controller: controller,
			controllerAs: "home"
		});

	/*@ngInject*/
	function controller(SearchService){
		var home = this;

        home.$onInit = function(){
            SearchService.lastTrades()
                .then(function(response){
                    home.trades = response.data;
                });
        };


        //////////////////////////

	}

})();