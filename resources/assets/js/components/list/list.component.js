(function () {
    'use strict';

    var template = [
        '<div class="row">',
        '   <div id="header">',
        '   </div>',
        '   <div ng-repeat="item in list._items" ng-show="(list._items.length == list.perPage || list.end)">',
        '       <div id="items" ng-class="{\'hovered\':list.hover}" class="col s12">',
        '       </div>',
        '   </div>',
        '   <div class="col s12 center">',
        '       <poke-paginator ng-if="list._items" page="list.page" set-page="list.newPage" total="list.total" per-page="list.perPage"></poke-paginator>',
        '</div>'
    ].join(' ');


    module.exports = angular.module('poke.list.module', [
        require('./paginator/paginator.component').name
    ])
        .component('pokeList', {
            restrict: 'E',
            template: "",
            controller: ListController,
            controllerAs: 'list',
            transclude: true,
            bindings: {
                items: '<',
                url: "@",
                perPage: "<",
                header: "<",
                total: "<",
                hover: "<"
            }
        });

    function ListController($transclude, $element, $scope, $compile, $http) {
        var list = this;  
        list.newPage = newPage;
        list.populate = populate;

        list.$onInit = function(){

            list.page = 1;
            list._items = [];
            list.total = 0;

            $transclude(function (clone) {
                $element.empty();
                var $template = angular.element(template);

                if(clone[1].tagName == "LIST-HEADER"){
                    $template.find("#header").append(clone[1].innerHTML);

                    if(clone[3].tagName == "ITEM")
                        $template.find("#items").append(clone[3].innerHTML);
                    else
                        throw new Error("tag /'item/' missing in list.component");
                }else{

                    if(clone[1].tagName == "ITEM")
                        $template.find("#items").append(clone[1].innerHTML);
                    else
                        throw new Error("tag /'item/' missing or have invalid tag in list.component ");
                }
                


                $element.append($compile($template)($scope));
            });

            if(!list.url){
                $scope.$watch(function(){
                    return list.items;
                },function(items){
                    if(items)
                        list.populate();
                });


            }else{
                $scope.$watch(function(){
                    return list.page;
                },function(){
                    $http.get(list.url+"?page="+list.page+"&limit="+list.perPage)
                        .then(function(response){
                            if( response.data.data.result.length < list.perPage)
                                list.end = true;
                            list.items = response.data.data.result;
                            list.total = response.data.data.total;
                            list.populate();
                        });
                });
            }

        };


        /////////////

        function newPage(number){
            list.page = number;
        }

        function populate(){

            if(!list.perPage)
                list.perPage = 10;

            if(!list.total)
                list.total = (list.items)?list.items.length:0;

            list._items = [];

            if(list.url){
                var start = 0;
                for(var i = start ; i < (list.perPage + start) ; i++ ){
                    if(!list.items[i])
                        break;

                    list._items.push(list.items[i]);

                }
            }else{
                var start = list.perPage * (list.page - 1);
                for(var i = start ; i < (list.perPage + start) ; i++ ){
                    if(!list.items[i])
                        break;

                    list._items.push(list.items[i]);

                }
            }

            if(!$scope.$$phase)
                $scope.$apply;
        }

    }

})();