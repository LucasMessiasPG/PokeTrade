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
        this.removeCard = removeCard;
        this.addWant = addWant;
        this.profile = profile
        this.login = login;
        this.register = register;
        this.getMyCards = getMyCards;
        this.getLastMessages = getLastMessages;
        this.sendWant = sendWant;
        this.getTrades = getTrades;

        //////////////////

        function checkLogin(force) {
            this.user = {};
            var user = $window.localStorage.getItem('user');
            if(typeof user !== 'undefined' && user !== 'undefined') {
                // if(force) {
                //
                // }
                this.user = JSON.parse(user);
                return this.user;
            }
            return false;
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