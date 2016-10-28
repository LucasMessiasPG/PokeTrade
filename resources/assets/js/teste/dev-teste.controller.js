(function(){
    'use strict';

    angular.module('pokecard.controller')
        .controller('DevTestController',DevTestController);

    DevTestController.$inject = [];
    function DevTestController(){
        var dev = this;
        dev.data = []
        for(var i = 0 ; i < 100 ; i ++){
            dev.data.push({name:"lucas "+i})
        }
    }
})();