(function () {
    'use strict';

    angular
        .module('pokecard.filter')
        .filter('custom_date',CustomDate);

    CustomDate.$inject = ['$filter'];
    function CustomDate($filter) {
        return function(item){
            var filter = $filter('date')(item,'dd/MM/yyyy - HH:mm');
            return filter;
        }
    }

})();