(function(){
    'use strict';

    angular
        .module('pokecard.directive')
        .directive('slider',tab);

    function tab() {
        return {
            restrict:'C',
            link:function(scope,el,attr){
                setTimeout(function(){
                    $('.slider').slider();
                },1);
            }
        }
    }

})();