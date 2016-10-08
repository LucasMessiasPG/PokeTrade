(function(){
    'use strict';

    angular
        .module('pokecard.service')
        .service('UserService',UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        this.user = {};
        this.addCard = addCard;
        this.login = login;
        this.register = register;
        this.getMyCards = getMyCards;

        //////////////////

        function addCard(card){
            return $http.post('/api/user/add-card',card)
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

    }

})();