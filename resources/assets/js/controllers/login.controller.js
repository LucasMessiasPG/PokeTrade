(function(){
    'use strict';

    angular
        .module('pokecard.controller')
        .controller('LoginController',LoginController);

    LoginController.$inject = ['UserService','$location'];
    function LoginController(UserService,$location) {
        var login = this;
        login.auth = auth;
        login.register = register;

        /////////////////

        function auth(user) {
            UserService.login(user)
                .then(function(response){
                    UserService.url = response.user;
                    $location.path('/home')
                })
        }

        function register(user){
            UserService.register(user)
                .then(function(response){
                    UserService.url = response.user;
                })
        }

    }
})();