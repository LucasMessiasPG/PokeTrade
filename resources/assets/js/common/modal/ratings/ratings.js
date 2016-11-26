(function(){
	"use strict";

	module.exports = angular.module("modal.ratings.module",[
		require('../../../directives/materialize')
	])
		.service("ratingsService",ratingsService)
		.name;

	/*@ngInject*/
	function ratingsService($document,$templateCache,$timeout){
		this.show = show;
		this.user = user;


		////////////////////

		function show(){
			var html = $templateCache.get("ratings/ratings.html");
			$document.find('body').append(html);
			$timeout(function() {
				console.log("document",$document.find('body'));
				angular.element(html).modal();
				
			}, 1000);
		}

		function user(){

		}
	}

})();