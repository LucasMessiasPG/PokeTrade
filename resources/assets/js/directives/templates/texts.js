(function(){
    'use strict';

    angular
        .module('pokecard.directive')
        .directive('texts',Texts);

    Texts.$inject = [];
    function Texts() {

        var template = "<table>" +
            "<tbody>" +
            "<tr ng-repeat='text in data'>" +
            "<td>Text: </td>" +
            "<td>{{text}}</td>" +
            "</tr>" +
            "</tbody>" +
            "</table>";

        return {
            restrict:'E',
            template: template,
            scope:{
              data:'='
            }
        }
    }

})();