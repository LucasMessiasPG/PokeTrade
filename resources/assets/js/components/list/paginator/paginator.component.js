(function(){
    'use strict';

    var PaginatorTemplate = [
        '<div>Paginator</div>'
    ].join(' ');

    angular
        .module('paginator',[])
        .component('paginatior',{
            template:PaginatorTemplate,
            controller:PaginatorController,
            controllerAS:'paginator',
            binding:{

            }
        });


    function PaginatorController(){

    }

})();