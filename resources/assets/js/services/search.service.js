(function(){
    'use strict';

    angular
        .module('pokecard.service')
        .service('SearchService',SearchService);

    SearchService.$inject = ['$http'];
    function SearchService($http) {
        this.search = search;

        /////////

        function search(filter){
            return $http.get('/api/search',{params:filter})
                .then(function(response){
                    return response.data;
                })
        }
    }

})();