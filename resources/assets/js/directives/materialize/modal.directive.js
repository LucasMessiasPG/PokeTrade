
(function(){
    "use strict";

    module.exports = angular.module("materialize.modal.module",[])
        .directive("modalContent",modalContent)
        .name;

    /*@ngInject*/
    function modalContent() {
        return {
            restrict:'C',
            link:function(scope,el,attr){
                setTimeout(function(){
                    $('.modal').modal();
                },1);
            }
        }
    }

})();