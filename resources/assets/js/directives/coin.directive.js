(function(){
    'use strict';

    angular
        .module('pokecard.directive')
        .directive('coin',Coin);

    Coin.$inject = ['$log','$compile'];
    function Coin($log,$compile) {
        var text = '';
        var $ = angular.element;


        return {
            restrict: 'E',
            priority: 1500,
            transclude: true,
            link:function(scope, el, attr, ctrl, transclude){
                console.log(scope);
                transclude(function(element){
                    console.log(element,element[0],element[0].innerText,$compile(element[0])(scope));
                })
            }
        };
            // compile: compile

        function compile( tElement, tAttributes ) {
            console.log( "Container at compile (html):", tElement.html() );
            return( link );
        }
        // I link the directive. Since we can only access the content via the
        // transclusion function, at this point, the content has already been
        // compiled by the time we get the clone.
        function link( scope, element, attributes, _c, transclude ) {
            console.log( "Container at link (html):", element.html() );
            // Clone and inject the transcluded content.
            transclude(
                function injectLinkedClone( clone ) {
                    console.log()
                    element.append( clone );
                }
            );
        }

    }

})();