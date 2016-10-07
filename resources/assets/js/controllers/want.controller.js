(function () {
    'use strict';

    angular
        .module('pokecard.controller')
        .controller('WantController', WantController);

    WantController.$inject = ['SearchService'];
    function WantController(SearchService) {
        var want = this;

        init();


        //////////////

        function init(){
            SearchService.wants()
                .then(function(response){
                    want.list = response.data;
                });
        }


    }
})();