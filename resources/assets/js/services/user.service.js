(function(){
    "use strict";

    module.exports = angular.module("poekcar.userservice.module",[])
        .service("UserService",UserService)
        .name;

    /*@ngInject*/
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
        UserService.completeTrade = completeTrade;

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
                if(UserService.user.id_user)
                    deferred.resolve(UserService.user);
                else        
                    UserService.login({login:'refresh',password:'refresh'})
                        .then(function(response){
                            UserService.user = response.user;
                            $window.localStorage.setItem('user',JSON.stringify(UserService.user));
                            deferred.resolve(UserService.user);
                        });
            }

            return deferred.promise;
        }

        function addCard(card){
            return $http.post('/api/user/add-card',card)
                .then(function(response){
                    return response.data;
                });
        }

        function removeCard(id){
            return $http.get('/api/user/'+id+'/remove-card')
                .then(function(response){
                    return response.data;
                });
        }

        function addWant(card){
            return $http.post('/api/user/add-want',card)
                .then(function(response){
                    return response.data;
                });
        }

        function profile(id_user){
            return $http.get('/api/user/'+id_user+'/profile')
                .then(function(response){
                    return response.data;
                });
        }

        function login(user) {
            return $http.post('/api/login',user)
                .then(function(response){
                    return response.data;
                });
        }

        function register(user) {
            return $http.post('/api/register',user)
                .then(function(response){
                    return response.data;
                });
        }

        function getMyCards() {
            return $http.get('/api/my-cards')
                .then(function(response){
                    return response.data;
                });
        }

        function getLastMessages(option){
            if(!option)
                option = {};

            if(typeof option.last == 'undefined')
                option.last = true;

            if(!option.id_status_message)
                option.id_status_message = '2,4';

            if(!option.limit)
                option.limit = false;

            return $http.get('/api/my-messages',{params:option})
                .then(function (response) {
                    return response.data;
                });
        }

        function sendWant(id_want){
            return $http.get("/api/user/"+id_want+"/send-want")
                .then(function(response){
                    return response.data;
                });
        }

        function getTrades(id_user){
            var filter = {
                id_user: id_user,
                limit: 4
            };
            return $http.get("/api/card/trades",{params:filter})
                .then(function(response){
                    return response.data;
                });
        }

        function completeTrade(card,rating){
            return $http.post("/api/card/trade/"+card.id_want,rating)
                .then(function(response){
                    return response.data;
                })   
        }

    }

})();