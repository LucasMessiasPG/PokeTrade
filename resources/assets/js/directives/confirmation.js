(function(){
	'use strict';

	angular
		.module('pokecard.directive')
		.directive('confirmation',Confirmation);

	Confirmation.$inject = ['$compile'];
	function Confirmation($compile){

		var modal = '<div id="confirmation-{{ id }}" class="modal">'+
    				'<div class="modal-content">'+
         			'<h4>Confirmation</h4>'+
         			'<span>{{ msg }}</span>'+
         			'<span><button ng-click="close()" class="btn btn-small waves-light waves-effect">Nao</button></span>'+
         			'<span><button ng-click="ok()" class="btn btn-small waves-light waves-effect">Sim</button></span>'+
    				'</div>'+
					'</div>'

		return {
			restrict:'A',
			scope:{
				msg:"@confirmation",
				callback:"&",
				id:"@modalId"
			},
			link:function(scope, el, attr, ctrl){
				scope.ok = function(){
					scope.callback();
					$('#confirmation-'+scope.id).closeModal();
				}

				scope.close = function(){
					$('#confirmation-'+scope.id).closeModal();
				}
				var html = $compile(modal)(scope);
				el.bind("click",function(){
					angular.element('body').append(html);
					scope.$apply();
					$('.modal-trigger').leanModal();
					$('#confirmation-'+scope.id).openModal();
				})
			}
		}
	}

})();