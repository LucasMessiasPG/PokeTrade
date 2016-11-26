(function(){
	"use strict";

	/**
	* service: ratingsService
	*/
	module.exports = /*@ngInject*/ function($document){
		this.show = show;
		this.user = user;


		////////////////////

		function show(){
			var html = "<div id='ratings'></div>"
			$document.find('body').append("<poke-ratings></poke-ratings>");
			console.log("document",$document.find('body'));
		}

		function user(){

		}
	}


})();