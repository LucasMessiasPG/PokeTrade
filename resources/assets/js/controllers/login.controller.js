(function(){
    'use strict';

    angular
        .module('pokecard.controller')
        .controller('LoginController',LoginController);

    LoginController.$inject = ['UserService','$window'];
    function LoginController(UserService,$window) {
        var login = this;
        login.auth = auth;
        login.register = register;

        /////////////////

        function auth(user) {
            UserService.login(user)
                .then(function(response){
                    if(response.status == 'success') {
                        if(login.message)
                            login.message = false;

                        UserService.user = response.user;
                        $window.localStorage.setItem('user', JSON.stringify(response.user));
                        $window.location.href = '/home'
                    }else {
                        login.message = 'Dados Inválidos'
                    }
                })
        }

        function register(user){
            UserService.register(user)
                .then(function(response){
                    UserService.user = response.user;
                    $window.localStorage.setItem('user',JSON.stringify(response.user));
                    $window.location.href = '/home'
                })
        }

    }
})();