(function(){
    'use strict';

    angular
        .module('pokecard.directive')
        .directive('collapsible',tab);

    function tab() {
        return {
            restrict:'C',
            link:function(scope,el,attr){
                setTimeout(function(){
                    $('.collapsible').collapsible();
                },1);
            }
        }
    }

})();