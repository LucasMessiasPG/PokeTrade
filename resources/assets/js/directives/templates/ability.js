(function(){
    'use strict';

    angular
        .module('pokecard.directive')
        .directive('ability',Ability);

    Ability.$inject = [];
    function Ability() {

        var template = "<table>" +
            "<tbody ng-repeat='ability in data'>" +
            "<tr>" +
            "<td class='valign-wrapper'><img style='width: 75px;margin-bottom: 10px' src='/img/ability.png' alt='ability'> <span class='valign'>{{ability.name}}</span></td>" +
            "</tr>" +
            "<tr>" +
            "<td>{{ability.text}}</td>" +
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