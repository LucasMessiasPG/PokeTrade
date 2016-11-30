(function(){
	'use strict';

	angular
		.module('pokecard.directive')
		.directive('confirmation',Confirmation);

	Confirmation.$inject = ['$compile'];
	function Confirmation($compile){

		var modal = '<div id="confirmation-{{ id }}" class="modal">'+
    				'<div class="modal-content" >'+
         			'<h4>Confirmation</h4>'+
         			'<span>{{ msg }}</span>'+
    				'</div>'+
         			'<div class="modal-footer">'+
         			'<button ng-click="close()" class=" modal-action modal-close waves-effect waves-green btn-flat red white-text">Nao</button>'+
         			'<button ng-click="ok()" class=" modal-action modal-close waves-effect waves-green btn-flat blue white-text">Sim</button>'+
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
					$('#confirmation-'+scope.id).modal("close");
				}

				scope.close = function(){
					$('#confirmation-'+scope.id).modal("close");
				}
				var html = $compile(modal)(scope);
				el.bind("click",function(){
					angular.element('body').append(html);
					scope.$apply();
					$('.modal').modal();
					$('#confirmation-'+scope.id).modal("open");
				})
			}
		}
	}

})();