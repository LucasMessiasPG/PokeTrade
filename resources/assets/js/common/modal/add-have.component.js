(function(){
	"use strict";

	module.exports = angular.module("modal.addHave.module",[
        require('../../services/user.service'),
    ])
		.component("pokeAddHave",{
			template: /*@ngInject*/ function($templateCache){
                return $templateCache.get("modal/add-have.html");
            },
			controller: controller,
			controllerAs: "modal",
			bindings: {
                show: "<"
			}
		});

	/*@ngInject*/
	function controller($scope,$q,UserService){
		var modal = this; 
        modal.add = add;

        modal.$onInit = function(){

        };


        /////////////

        function add(card){
            var new_card = {
                id_card:card.id_card,
                amount:(card.amount)?card.amount:1,
                foil:(card.foil)?card.foil:false,
                reverse_foil:(card.reverse_foil)?card.reverse_foil:false,
                full_art:(card.full_art)?card.full_art:false
            };

            if(card.full_art) {
                new_card.foil = true;
                new_card.reverse_foil = true;
            }

            if(card.reverse_foil){
                new_card.foil = true;
            }

            UserService.addCard(new_card)
                .then(function(response){
                    if(response.status == 'success')
                        $('#have').closeModal();
                });
        }

	}

})();