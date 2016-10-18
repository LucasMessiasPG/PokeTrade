(function(){
    'use strict';

    angular.module('pokecard.directive')
        .directive('imgLoad',ImgLoad);

    ImgLoad.$inject = [];
    function ImgLoad() {
        return {
            restrict:'E',
            link: function(scope, el){
                scope.$watch('src',function(value){
                    if(value) {
                        var img = new Image();
                        img.onload = function (result) {
                            angular.element(el).find('img').attr('src', scope.src);
                            $('.materialboxed').materialbox();
                        };
                        el.append('<span><img class="materialboxed" src="/img/card-default.png" alt=""></span>');
                        img.src = scope.src;
                    }
                });
            },
            tranclude:true,
            scope:{
                src: '<pokeSrc',
                classe: '@pokeClass'
            }
        }
    }

})();