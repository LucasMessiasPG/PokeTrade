(function(){
    'use strict';


    angular
        .module('pokecard.controller')
        .controller('UserController', UserController)

    UserController.$inject = ['UserService','$routeParams','$location'];
    function UserController(UserService,$routeParams,$location) {
        var user = this;
        if(UserService.user){
        	user.user = UserService.user;
        	init();
    	}else{
    		$location.path('/login')
    	}


        //////////////

        function init(){
        	var id_user = null; 
        	if(id_user = $routeParams.id_user){
        		if(id_user == 1){
    				$location.path('/user');
        			UserService.profile(UserService.user.id_user)
        			.then(function(response){
        				user.profile = response.user
        			})
        			.catch(function(){
    					$location.path('/user');
        			})
        		}else{
	        		UserService.profile(id_user)
	        			.then(function(response){
	        				user.profile = response.user
	        			})
	        			.catch(function(){
	    					$location.path('/user');
	        			})
        		}
        	}else{
        		UserService.profile(UserService.user.id_user)
        			.then(function(response){
        				user.profile = response.user
        			})
        			.catch(function(){
    					$location.path('/user');
        			})
        	}
        }
    }

})();