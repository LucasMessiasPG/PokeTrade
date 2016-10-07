(function(){
    'use strict';

    angular
        .module('pokecard.service')
        .service('SearchService',SearchService);

    SearchService.$inject = ['$http'];
    function SearchService($http) {
        this.search = search;
        this.lastTrades = lastTrades;
        this.wants = wants;

        ///////////

        function search(filter){
            return $http.get('/api/search',{params:filter})
                .then(function(response){
                    return response.data;
                })
        }

        function lastTrades(){
            return $http.get('api/last-trades')
                .then(function(response){
                    return response.data;
                })
        }

        function wants(){
            return $http.get('api/card/wants')
                .then(function(response){
                    return response.data;
                })
        }
    }

})();