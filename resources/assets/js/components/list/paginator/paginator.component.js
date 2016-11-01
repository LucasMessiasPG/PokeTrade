(function(){
    'use strict';

    var template = [
        '<div class="paginator" ng-hide="paginator.hide">',
        '   <button class="btn btn-small" ng-disabled="paginator.first == paginator.page" ng-click="paginator.setPage(paginator.first)">{{ paginator.first }}</button>',
        '   <span ng-show="(paginator.pages[0] >= 3)">...</span>',
        '   <button class="btn btn-small" ng-repeat="page in paginator.pages" ng-disabled="page == paginator.page" ng-click="paginator.setPage(page)">{{ page }}</button>',
        '   <span ng-show="((paginator.page + 4) < paginator.last)">...</span>',
        '   <button class="btn btn-small" ng-disabled="paginator.last == paginator.page" ng-click="paginator.setPage(paginator.last)">{{ paginator.last }}</button>',
        '</div>'
    ].join(' ');

    module.exports = angular.module('paginator.module',[])
        .component('pokePaginator',{
            template:template,
            controller:PaginatorController,
            controllerAs:'paginator',
            bindings:{
                page: "<",
                setPage: "<",
                total: "<",
                perPage: "<"
            }
        });


    function PaginatorController($scope){
        var paginator = this;
        paginator.populate = populate;

        paginator.$onInit = function(){

            if(!paginator.total)
                paginator.total = 0;

            $scope.$watch(function(){
                return paginator.page;
            },function(){
                paginator.populate();
            });

            $scope.$watch(function(){
                return paginator.total;
            },function(){
                paginator.populate();
            });
        }

        ////////////////

        function populate(){
            
            var end = Math.round((paginator.total / paginator.perPage));

            if(end == 0){
                paginator.hide = true;
                return false;
            }else{
                paginator.hide = false;
            }

            paginator.pages = [];
            paginator.first = 1;
            var page = paginator.page;
            for(var i = 2 ; i <= (end - 1) ; i ++){
                if((page < 3 && i <= 3) || (page <= (i + 3) && page >= (i - 3)) || (i - 3) > (end-1)){
                    paginator.pages.push(i);
                }
            }
            paginator.last = end;
        }
    }

})();