(function () {
    'use strict';

    angular
        .module('pokecard.filter')
        .filter('custom_date',CustomDate);

    CustomDate.$inject = ['$filter'];
    function CustomDate($filter) {
        return function(item){
            return $filter('date')(new Date(item),'dd/MM/yyyy - HH:mm');
        }
    }

})();