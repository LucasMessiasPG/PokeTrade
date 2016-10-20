angular.module('pokecard',[
    'ngRoute',
    'pokecard.service',
    'pokecard.directive',
    'pokecard.filter',
    'pokecard.controller',
    'poke.list'
]);

angular.module('pokecard.controller',['ngSanitize']);
angular.module('pokecard.service',[]);
angular.module('pokecard.directive',[]);
angular.module('pokecard.filter',[]);
// angular.module('paginator',[]);
angular.module('poke.list',[]);
