(function(){
    'use strict';

    angular
        .module('pokecard.service')
        .service('UserService',UserService);

    UserService.$inject = ['$http','$window','$q'];
    function UserService($http,$window,$q) {
        var UserService = this;
        UserService.user = {};
        UserService.checkLogin = checkLogin;
        UserService.getUser = getUser;
        UserService.addCard = addCard;
        UserService.removeCard = removeCard;
        UserService.addWant = addWant;
        UserService.profile = profile
        UserService.login = login;
        UserService.register = register;
        UserService.getMyCards = getMyCards;
        UserService.getLastMessages = getLastMessages;
        UserService.sendWant = sendWant;
        UserService.getTrades = getTrades;

        //////////////////

        function checkLogin(force) {
            UserService.user = {};
                var user = $window.localStorage.getItem('user');
                if (typeof user !== 'undefined' && user !== 'undefined') {
                    UserService.user = JSON.parse(user);
                    return UserService.user;
                }
                return false;

        }

        function getUser(force){
            var deferred = $q.defer();
            if(!force){
                var user = $window.localStorage.getItem('user');
                if (typeof user !== 'undefined' && user !== 'undefined') {
                    UserService.user = JSON.parse(user);
                    deferred.resolve(UserService.user);
                }
            }else{
                UserService.login({login:'refresh',password:'refresh'})
                    .then(function(response){
                        UserService.user = response.user;
                        $window.localStorage.setItem('user',JSON.stringify(UserService.user));
                        deferred.resolve(UserService.user);
                    })
            }

            return deferred.promise;
        }

        function addCard(card){
            return $http.post('/api/user/add-card',card)
                .then(function(response){
                    return response.data;
                })
        }

        function removeCard(id){
            return $http.get('/api/user/'+id+'/remove-card')
                .then(function(response){
                    return response.data;
                })
        }

        function addWant(card){
            return $http.post('/api/user/add-want',card)
                .then(function(response){
                    return response.data;
                })
        }

        function profile(id_user){
            return $http.get('/api/user/'+id_user+'/profile')
                .then(function(response){
                    return response.data
                })
        }

        function login(user) {
            return $http.post('/api/login',user)
                .then(function(response){
                    return response.data;
                })
        }

        function register(user) {
            return $http.post('/api/register',user)
                .then(function(response){
                    return response.data;
                })
        }

        function getMyCards() {
            return $http.get('/api/my-cards')
                .then(function(response){
                    return response.data;
                })
        }

        function getLastMessages(){
            var filter = {
                last:true,
                id_status_message:'2,4'
            };
            return $http.get('/api/my-messages',{params:filter})
                .then(function (response) {
                    return response.data
                })
        }

        function sendWant(id_want){
            return $http.get("/api/user/"+id_want+"/send-want")
                .then(function(response){
                    return response.data;
                })
        }

        function getTrades(){
            return $http.get("/api/")   
        }

    }

})();