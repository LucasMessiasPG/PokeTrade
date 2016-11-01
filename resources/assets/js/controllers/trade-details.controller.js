(function(){
	"use strict";

	angular
		.module("pokecard.controller")
		.controller("TradeDetailsController",TradeDetailsController);

    TradeDetailsController.$inject = ['$routeParams','SearchService','$location'];
	function TradeDetailsController($routeParams,SearchService,$location){
		var tradeDetails = this;

		init();

		/////////////

		var redirect = function(){
			$location.path('/home');
		};

		function init(){
			var id_history = $routeParams.id_history;
            console.log(id_history);
			if(id_history){
				SearchService.history(id_history)
					.then(function(response){
					    if(response.data)
                            tradeDetails.details = response.data;
					})
			}else{
				redirect();
			}	
		}

	}

})();