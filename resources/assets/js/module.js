angular.module('pokecard',[
    'ngRoute',
    'pokecard.service',
    'pokecard.directive',
    'pokecard.filter',
    'pokecard.controller'
]);

// angular.module('paginator',[]);
angular.module('pokecard.controller',['ngSanitize',require('./components/list/list.component').name]);
angular.module('pokecard.service',[]);
angular.module('pokecard.directive',[]);
angular.module('pokecard.filter',[]);
