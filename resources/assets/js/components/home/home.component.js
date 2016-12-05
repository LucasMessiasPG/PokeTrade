(function(){
	"use strict";

	module.exports = angular.module("pokecard.home.module",[
		require('../../common/list/list.component'),
		require('../../filters/custom-date.filter')
	])
		.component("pokeHome",{
			template: /*@ngInject*/ function($templateCache){
				return $templateCache.get("home/home.html");
			},
			controller: controller,
			controllerAs: "home"
		})
		.name;

	/*@ngInject*/
	function controller(SearchService, $filter){
		var home = this;

        home.$onInit = function(){
            SearchService.lastTrades()
                .then(function(response){
                    home.trades = $filter("orderBy")(response.data,"-updated_at");
                });
        };


        //////////////////////////

	}

})();