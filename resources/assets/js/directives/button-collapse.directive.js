(function(){
    'use strict';

    angular
        .module('pokecard.directive')
        .directive('buttonCollapse',tab);

    function tab() {
        return {
            restrict:'C',
            link:function(scope,el,attr){
                setTimeout(function(){
                    $(".button-collapse").sideNav();
                },1);
            }
        }
    }

})();