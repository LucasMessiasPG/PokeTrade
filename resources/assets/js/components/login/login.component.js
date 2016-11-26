(function(){
	"use strict";

	module.exports = angular.module("pokecard.login.module",[
        require('../../directives/materialize')
	])
		.component("pokeLogin",{
			template: /*@ngInject*/ function($templateCache){
                return $templateCache.get('login/login.html');
            },
			controller: controller,
			controllerAs: "login",
		})
        .name;

	/*@ngInject*/
    function controller(UserService,$window){
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