(function(){
    'use strict';

    angular
        .module('pokecard.directive')
        .directive('materialboxed',materialboxed)

    function materialboxed() {
        return {
            restrict:'C',
            link:function(scope,el,attr){
               setTimeout(function(){
                   $('.materialboxed').materialbox();
               },100);
            }
        }
    }

})();