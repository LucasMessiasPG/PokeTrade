(function(){
	"use strict";

	

	module.exports = angular.module("pokecard.user.module",[
		require('../../services/user.service'),
		require('../../filters/custom-date.filter'),
	])
		.component("pokeUser",{
			template: /*@ngInject*/ function($templateCache){
				return $templateCache.get("user/user.html");
			},
			controller: controller,
			controllerAs: "user"
		})
		.name;

	/*@ngInject*/
	function controller(UserService,$routeParams,$location,$scope){
		var user = this;
		user.getProfile = getProfile;
		user.show = show;
		user.editProfile = editProfile;

		user.$onInit = function(){
			UserService.getUser()
				.then(function(_user){
					user.user = _user;
					user.getProfile();
				});
			
		};

        //////////////

        function getProfile(){
			if(!user.user)
				$location.path('/login');
			
			var id_user = $routeParams.id_user;	

			UserService.getLastMessages({last: 0, limit: 3,id_status_message: '4'})
				.then(function(response){
					user.trades = response.data;
				});

			if(!id_user){
				UserService.profile(UserService.user.id_user)
	    			.then(function(response){
	    				user.profile = response.user;
	    			})
	    			.catch(function(){
						$location.path('/user');
	    			});
	    	}else{
	    		UserService.profile(id_user)
	    			.then(function(response){
	    				user.profile = response.user;
	    			})
	    			.catch(function(){
						$location.path('/user');
	    			});
    		}
        }

        function show(modal){
        	user.edit = angular.copy(user.profile);
        	$("#"+modal).modal("open");
        }

        function editProfile(user){
        	if(user.login)
        		delete user.login;

        	UserService.updateProfile(user)
        		.then((response) => {
        			console.log("response",response);
        		})

        }

	}

})();