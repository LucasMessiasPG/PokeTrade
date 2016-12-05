(function(){
	"use strict";
	// var angular = require('angular');

	module.exports = angular.module("pokecard.search.module",[
        require('../../common/modal/add-have/add-have.component').name,
        require('../../directives/materialize'),
        require('../../common/list/list.component'),
	])
		.component("pokeSearch",{
			template: /*@ngInject*/ function($templateCache){
                return $templateCache.get('search/search.html');
            },
			controller: controller,
			controllerAs: "search",
		})
        .name;


	/*@ngInject*/
	function controller(SearchService,UserService){
		var ctrl = this;
        ctrl.search = search;
        ctrl.have = have;
        ctrl.want = want;
        ctrl.opemHave = opemHave;
        ctrl.url = "/api/search";
        ctrl._filter = {random:true};

        init();

        ///////////

        function init() {
            ctrl.user = UserService.checkLogin();
            ctrl.filter = {};
            ctrl.table = null;
        }


        function search(filter) {
            ctrl._filter = angular.copy(filter);
        }

        function callSearch(filter,is_new){
            SearchService.search(filter)
                .then(function (response) {
                    ctrl.table = response.data.result;
                    ctrl.table_total = response.data.total;
                })
        }

        function opemHave(card,type) {
            ctrl.card_modal = card;
            $('#'+type).modal("open");
        }

        function have(card){

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
                        $('#have').modal("close");
                });
        }

        function want(card) {
            var new_card = {
                id_card:card.id_card,
                amount:(card.amount)?card.amount:1,
                pp:(card.pp)?card.pp:0,
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

            UserService.addWant(new_card)
                .then(function(response){
                    if(response.status == 'success')
                        $('#want').modal("close");
                });
        }
	}


})();