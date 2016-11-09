(function(){
	"use strict";

	module.exports = angular.module("materialize.module",[
		require('./modal.directive'),
		require('./tooltip.directive'),
	])
		.name;

})();