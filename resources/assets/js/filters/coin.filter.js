(function () {
    'use strict';

    angular
        .module('pokecard.filter')
        .filter('coin',Coin);

    Coin.$inject = [];
    function Coin() {

    }

})();