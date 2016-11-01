(function(){
	"use strict";

	angular
		.module("pokecard.controller")
		.controller("DetailsController",DetailsController);

	DetailsController.$inject = ['$routeParams','SearchService','$location'];
	function DetailsController($routeParams,SearchService,$location){
		var details = this;

		init();

		/////////////

		var redirect = function(){
			$location.path('/home');
		}

		function init(){
			var id_card = $routeParams.id_card;
			if(id_card){
				SearchService.search({id_card:id_card})
					.then(function(response){
						if(response.data.result[0])
							details.card = response.data.result[0];
						else
							redirect();
					})
			}else{
				redirect();
			}	
		}

	}

})();