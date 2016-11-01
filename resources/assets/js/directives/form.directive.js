(function(){
    'use strict';

    angular
        .module('pokecard.directive')
        .directive('form',form);

    function form() {
        return {
            restrict:'E',
            link:function(scope,el,attr){
                el.attr('autocomplete','off');
            }
        }
    }

})();