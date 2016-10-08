(function () {
    'use strict';

    angular
        .module('pokecard.controller')
        .controller('NewCardController', NewCardController);

    NewCardController.$inject = ['SearchService','UserService','$location'];
    function NewCardController(SearchService,UserService,$location) {
        var ctrl = this;
        ctrl.search = search;
        ctrl.addCard = addCard;
        ctrl.nextPage = nextPage;
        ctrl.backPage = backPage;
        ctrl.setPage = setPage;
        ctrl.save = save;

        init();

        /////////////////////

        function init() {
            ctrl.add = false;
            ctrl.filter = {};
        }

        function search(filter) {
            filter.limit = 10;
            ctrl.filter.page = 1;
            callSearch(filter, true);
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

        function callSearch(filter, is_new) {
            SearchService.search(filter)
                .then(function (response) {
                    ctrl.table = response.data.result;
                    if (is_new) {
                        ctrl.table_total = response.data.total;
                        var pagination = Math.round(response.data.total / filter.limit);
                        ctrl.table_total_pagination = pagination;
                        ctrl.table_pagination = [];
                        for (var i = 0; i < pagination; i++) {
                            ctrl.table_pagination.push(i + 1);
                        }
                    }
                    if (ctrl.filter.page < 1)
                        ctrl.filter.page = 1;

                    if (ctrl.filter.page > pagination)
                        ctrl.filter.page = pagination;

                    ctrl.current_page = ctrl.filter.page;
                })
        }

        function addCard(card){
            ctrl.add = true;
            ctrl.new_card = card;
        }

        function save(card) {
            var new_card = {
                id_card:card.id_card,
                amount:(card.amount)?card.amount:1,
                foil:(card.foil)?card.foil:false,
                reverse_foil:(card.reverse_foil)?card.reverse_foil:false,
                full_art:(card.full_art)?card.full_art:false
            };
            UserService.addCard(new_card)
                .then(function(response){
                    if(response.status == 'success')
                        $location.path('/my-cards')
                });
        }
    }

})();