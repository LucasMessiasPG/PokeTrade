(function(){
    'use strict';

    angular
        .module('pokecard.directive')
        .directive('attack',Attack);

    Attack.$inject = [];
    function Attack() {

        var template = "<hr>" +
            "<table class='table-bordered margin-top' ng-repeat='attack in data'>" +
            "<tbody>" +
            "<tr>" +
            "<td class='valign-wrapper'><types data='attack.cost'></types>  <strong><span class='valign'>{{attack.name}} - {{ attack.damage }}</span></strong></td>" +
            "</tr>" +
            "<tr ng-show='attack.text'>" +
            "<td>{{attack.text}}</td>" +
            "</tr>" +
            "</tbody>" +
            "</table>" +
            "<hr>";

        return {
            restrict:'E',
            template: template,
            scope:{
              data:'='
            }
        }
    }

})();