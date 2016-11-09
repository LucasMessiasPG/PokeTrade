require('angular-sanitize');

angular.module('pokecard',[
    'ngRoute',
    'ngSanitize',
    'pokecard.service',
    'pokecard.directive',
    'pokecard.filter',
    'pokecard.controller',

    require('./filters/custom-date.filter'),
    require('./template/templates').name,
    require('./components/user/user.component'),
    require('./components/search/search.component'),
    require('./components/home/home.component'),
    require('./components/trade/trade.component'),
    require('./directives/materialize'),
    require('./components/want/want.component')
]);

// angular.module('paginator',[]);
angular.module('pokecard.controller',[
	'ngSanitize',
	require('./services/user.service'),
    require('./services/search.service'),
    require('./filters/custom-date.filter'),
	require('./common/list/list.component')]
);
angular.module('pokecard.service',[]);
angular.module('pokecard.directive',[]);
angular.module('pokecard.filter',[]);