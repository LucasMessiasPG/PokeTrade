(function(){
    'use strict';

    angular
        .module('pokecard')
        .provider('Poke',Poke);

    Poke.$inject = ['$routeProvider', '$locationProvider'];
    function Poke($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.otherwise({
            redirectTo: '/home'
        });
        this.route = function(path,controller,controllerAs,html){
            $routeProvider
                .when(path,{
                    templateUrl:'html/'+((html)?html:path)+'.html',
                    controller:controller,
                    controllerAs: controllerAs
                })
        };

        this.$get = function() {
            return new this.route;
        };
    }

})();