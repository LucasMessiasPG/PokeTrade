(function(){
    'use strict';

    angular
        .module('pokecard.directive')
        .directive('card',Card);

    Card.$inject = [];
    function Card() {

        var template = "<div class='col s12'>" +
            "<div class='col m6 s12'>" +
            "<span ng-if='card.name_card'>Name: <strong><a ng-href='{{card.id_card}}'>{{card.name_card}}</a></strong></span>" +
            "</div>" +
            "<div class='col m3 s6'>" +
            "<span ng-if='card.supertype'>Supertype: <strong>{{card.supertype}}</strong></span>" +
            "</div>" +
            "<div class='col m3 s6'>" +
            "<span ng-if='card.subtype'>Subtype: <strong>{{card.subtype}}</strong></span>" +
            "</div>" +
            "<div class='col m6 s12'>" +
            "<span ng-if='card.types && card.types.length > 0'>Types: <types data='card.types'></types></span>" +
            "</div>" +
            "<div class='col s12'>" +
            "<span ng-if='card.ability'><ability data='card.ability'></ability></span>" +
            "</div>" +
            "<div class='col s12'>" +
            "<span ng-if='card.attack'><attack data='card.attack'></attack></span>" +
            "</div>" +
            "<div class='col s12'>" +
            "<span ng-if='card.texts'><texts data='card.texts'></texts></span>" +
            "</div>" +
            "<div class='col s4'>" +
            "<span ng-if='card.retreat && card.retreat.length > 0'>Retreat: <types data='card.retreat'></types></span>" +
            "</div>" +
            "<div class='col s4'>" +
            "<span ng-if='card.weakness'>Weakness: <types data='card.weakness'></types></span>" +
            "</div>" +
            "<div class='col s4'>" +
            "<span ng-if='card.resistances'>Resistance: <types data='card.resistances'></types></span>" +
            "</div>" +
            "<div class='col s12'>" +
            "<span ng-if='card.artist'>Artist: <strong>{{card.artist}}</strong></span>" +
            "</div>" +
            "</div>"

        return {
            restrict:'E',
            template: template,
            scope:{
               card:'='
            }
        }
    }

})();