(function () {
    'use strict';

    angular
        .module('pokecard.controller')
        .controller('LogoutController',LogoutController);

    LogoutController.$inject = ['UserService','$window'];
    function LogoutController(UserService,$window) {
        var logout = this;

        init();

        /////////////////

        function init() {
            UserService.user = {};
            $window.localStorage.removeItem('user');
            $window.location.href = '/api/logout'
        }

    }

})();