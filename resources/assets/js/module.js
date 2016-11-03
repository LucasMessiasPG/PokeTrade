angular.module('pokecard',[
    'ngRoute',
    'pokecard.service',
    'pokecard.directive',
    'pokecard.filter',
    'pokecard.controller',
    require('./template/templates').name,
    require('./components/search/search.component').name,
    require('./components/home/home.component').name,
    require('./components/want/want.component').name
]);

// angular.module('paginator',[]);
angular.module('pokecard.controller',[
	'ngSanitize',
	require('./services/user.service'),
    require('./services/search.service'),
	require('./common/list/list.component')]
);
angular.module('pokecard.service',[]);
angular.module('pokecard.directive',[]);
angular.module('pokecard.filter',[]);