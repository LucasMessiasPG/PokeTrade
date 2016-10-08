(function () {
    'use strict';

    angular
        .module('pokecard.filter')
        .filter('coin',Coin);

    Coin.$inject = ['$compile'];
    function Coin($compile) {
        return function(item,scope){
            console.log(item);
            console.log(scope);
            return $compile('<b>'+item+'</b>')(scope)
        }
    }

})();