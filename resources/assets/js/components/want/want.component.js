(function(){
	"use strict";

	module.exports = angular.module("pokecard.want.module",[
		require('../../services/search.service'),
		require('../../services/user.service'),
        require('../../common/list/list.component'),
        require('../../directives/materialize'),

	])
		.component("pokeWant",{
		  template: /*@ngInject*/ function($templateCache){
		      return $templateCache.get("want/want.html");
		  },
		  controller: controller,
		  controllerAs: "want"
	   })
        .name;

	/*@ngInject*/
	function controller(SearchService,UserService,$scope, $location, $route){
		var want = this;
        want.send = send;
        want.have = have;
        want.opemHave = opemHave;
        want.have = have;


        init();

        //////////////

        function init(){
            want.user = UserService.user;
            want.url = '/api/card/wants';
            // SearchService.wants()
                // .then(function(response){
                    // want.list = response.data;
                // });
        }

        function send(item){
            UserService.sendWant(item.id_want)
                .then(function(response){
                    if(response.status == 'success') {
                        if(!want.filter)
                            want.filter = {};
                        want.filter.refresh = true;
                    }
                });
        }

        function have(status) {
            if(status)
                want.filter = {
                    have: 1
                };
            else
                want.filter = {};
        }


        function opemHave(card) {
            want.card_modal = card;
            $('#have').modal("open");
        }

        function have(card){
            var new_card = {
                id_card:card.card.id_card,
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
                    if(response.status == 'success'){
                        $('#have').modal("close");
                        $route.reload();
                    }
                })
                .catch(function(response){
                    $('#have').modal("close");
                    if(response.status == 403){
                        $location.path("/login");
                    }else{
                        alert("ops !!!");
                    }
                });
        }

	}

})();