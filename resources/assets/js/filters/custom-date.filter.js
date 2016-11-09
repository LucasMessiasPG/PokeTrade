(function () {
    'use strict';

    module.exports = angular.module("custon.date.module",[])
        .filter("custon_date",function($filter){
            return function(item){
                if(item){
                    var filter = $filter('date')(new Date(item),'dd/MM/yyyy HH:mm');
                    return filter;
                }
                return "";
            };
        })
        .name;

})();