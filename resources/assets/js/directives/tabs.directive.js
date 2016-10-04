(function(){
    'use strict';

    angular
        .module('pokecard.directive')
        .directive('tab',tab);

    function tab() {
        return {
            restrict:'C',
            link:function(scope,el,attr){
                setTimeout(function(){
                    $('ul.tabs').tabs();
                },1);
            }
        }
    }

})();