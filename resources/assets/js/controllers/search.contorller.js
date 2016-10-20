(function () {
    'use strict';

    angular
        .module('pokecard.controller')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['SearchService','UserService'];
    function SearchController(SearchService,UserService) {
        var ctrl = this;
        ctrl.search = search;
        ctrl.nextPage = nextPage;
        ctrl.backPage = backPage;
        ctrl.setPage = setPage;
        ctrl.have = have;
        ctrl.want = want;
        ctrl.opemHave = opemHave;

        init();

        ///////////

        function init() {
            ctrl.user = UserService.checkLogin();
            ctrl.filter = {};
            ctrl.table = null;
        }


        function search(filter) {
            filter.limit = 10;
            ctrl.filter.page = 1;
            callSearch(filter,true);
        }

        function nextPage(){
            ctrl.filter.page++;
            callSearch(ctrl.filter)
        }
        function backPage(){
            ctrl.filter.page--;
            callSearch(ctrl.filter)
        }

        function setPage(page){
            ctrl.filter.page = page;
            callSearch(ctrl.filter)
        }

        function callSearch(filter,is_new){
            SearchService.search(filter)
                .then(function (response) {
                    ctrl.table = response.data.result;
                    if(is_new) {
                        ctrl.table_total = response.data.total;
                        var pagination = Math.round(response.data.total/filter.limit);
                        ctrl.table_total_pagination = pagination;
                        ctrl.table_pagination = [];
                        for(var i = 0; i<pagination; i++) {
                            ctrl.table_pagination.push(i + 1);
                        }
                    }
                    if(ctrl.filter.page < 1)
                        ctrl.filter.page = 1;

                    if(ctrl.filter.page > pagination)
                        ctrl.filter.page = pagination;

                    ctrl.current_page = ctrl.filter.page;
                })
        }

        function opemHave(card,type) {
            ctrl.card_modal = card;
            $('#'+type).openModal()
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
                        $('#have').closeModal()
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
                        $('#want').closeModal()
                });
        }
    }


})();