(function () {
    'use strict';

    angular
        .module('pokecard.controller')
        .controller('MasterController', MasterController);


    MasterController.$inject = ['UserService','$scope'];
    function MasterController(UserService,$scope) {
        var master = this;

        init();

        ////////////////

        function init() {

            UserService.getUser(true)
                .then(function(user){
                    master.user = user;
                });
        }

    }

})();