(function(){
    'use strict';

    var templateList = [
        '<div>lista</div>',
        '<paginator></paginator>'
    ].join(' ');

    // angular
    //     .module('poke.list')
    //     .component('poke-list',{
    //         tempalte:'ahsidhhasidhasidhiuashdiuahduiashuidas',
    //         controller:function(){
    //             console.log(1231);
    //         },
    //         controllerAs:'list'
    //     });

    angular
        .module('pokecard.controller')
        .directive('poke-list',function(){
            return {
                retrict:'E',
                template: 'hasidhaisdhiuashduisahudsa',
                controller:ListController,
                controllerAs: 'list'
            }

        });

    function ListController() {
        console.log(123);
    }

})();