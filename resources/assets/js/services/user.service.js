(function(){
    'use strict';

    angular
        .module('pokecard.service')
        .service('UserService',UserService);

    UserService.$inject = ['$http','$window'];
    function UserService($http,$window) {
        this.user = {};
        this.checkLogin = checkLogin;
        this.addCard = addCard;
        this.addWant = addWant;
        this.login = login;
        this.register = register;
        this.getMyCards = getMyCards;
        this.getLastMessages = getLastMessages;

        //////////////////

        function checkLogin() {
            var user = $window.localStorage.getItem('user');
            if(typeof user !== 'undefined' && user !== 'undefined') {
                UserService.user = JSON.parse(user);
                return UserService.user;
            }
            return false;
        }

        function addCard(card){
            return $http.post('/api/user/add-card',card)
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

    }

})();