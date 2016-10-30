(function(){
	"use strict";
	// var angular = require('angular');

	var template = [
	'<div class="margin-top">',
    '	<h2>Search</h2>',
    '	<p>Seache all cards pokemon!</p>',
    '	<form ng-submit="search.search(search.filter)">',
    '   	<input type="hidden" ng-model="search.filter.limit">',
    '    	<div class="input-field col s6 m3">',
    '       	<input name="set" id="set" class="form-control" type="text" ng-model="search.filter.set">',
    '       	<label for="set">Set</label>',
    '    	</div>',
    '    	<div class="input-field col s6 m4">',
    '       	<input name="name" id="name" class="form-control" type="text" ng-model="search.filter.name">',
    '       	<label for="name">Card Name</label>',
    '    	</div>',
    '		<div class="input-field col s6 m3">',
    '       	<input name="number" id="number" class="form-control" type="text" ng-model="search.filter.number">',
    '       	<label for="number">Card Number</label>',
    '    	</div>',
    '    	<div class="col s6 m2">',
    '       	<button type="submit" class="btn right btn-small waves-effect waves-light margin-top">Search</button>',
    '    	</div>',
    '	</form>',
	'   <div class="col s12">',
    '   	<poke-list per-page="10" url="{{ search.url }}" hover="true" filter="search._filter">',
    '   		<list-header>',
    '       		<div class="col s12 m3">Set</div>',
    '				<div class="col s12 m7">Card</div>',
    '   	        <div class="col s12 m2">Rarity</div>',
    '      		</list-header>',
    '       	<item>',
    '       		<div class="col s12 m3">',
    '           		<span title="{{ item.set }}">{{ item.code_set }}</span>',
    '           	</div>',
    '           	<div class="col s12 m7">',
    '               	<img-load poke-src="item.image_url" class="small-img"></img-load>',
    '               	<a ng-href="/details/{{ item.id_card }}">{{ item.name_card }}</a>',
    '           	</div>',
    '           	<div class="col s12 m2">',
    '           	</div>',
    '               {{ item.rarity }}',
    '   		</item>',
    '		</poke-list>',
    '	</div>',
	'</div>'	
	].join(" ");

	module.exports = angular.module("pokecard.search.module",[
	])
		.component("pokeSearch",{
			template: template,
			controller: controller,
			controllerAs: "search",
		});


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
            $('#'+type).openModal();
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
                        $('#have').closeModal();
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
                        $('#want').closeModal();
                });
        }
	}


})();