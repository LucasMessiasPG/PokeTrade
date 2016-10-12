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
        this.trades = trades;
        this.history = history;

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

        function wants(filter){
            return $http.get('api/card/wants',{params:filter})
                .then(function(response){
                    return response.data;
                })
        }

        function trades(){
            return $http.get('api/card/trades')
                .then(function(response){
                    return response.data;
                })
        }

        function history(id_history) {
            return $http.get('api/history/'+id_history)
                .then(function (response) {
                    return response.data
                })
        }
    }

})();