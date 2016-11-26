(function(){
    'use strict';

    angular
        .module('pokecard.directive')
        .directive('modalContent',modalContent);

    function modalContent() {
        return {
            restrict:'C',
            link:function(scope,el,attr){
                setTimeout(function(){
                    $('.modal-trigger').modal("open");
                },1);
            }
        }
    }

})();