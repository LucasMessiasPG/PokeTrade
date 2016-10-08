(function () {
    'use strict';

    angular
        .module('pokecard.controller')
        .controller('MasterController', MasterController);


    MasterController.$inject = ['UserService'];
    function MasterController(UserService) {
        var master = this;

        init();

        ////////////////

        function init() {
            master.user = UserService.checkLogin();
        }

    }

})();