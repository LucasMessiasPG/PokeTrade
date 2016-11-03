
(function(){
    "use strict";

    module.exports = angular.module("materialize.modal.module",[])
        .directive("modalContent",modalContent)
        .name;

    function modalContent() {
        return {
            restrict:'C',
            link:function(scope,el,attr){
                setTimeout(function(){
                    $('.modal-trigger').leanModal();
                },1);
            }
        }
    }

})();