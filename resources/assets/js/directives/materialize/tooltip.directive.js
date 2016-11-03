
(function(){
    "use strict";

    module.exports = angular.module("materialize.tooltip.module",[])
        .directive("tooltipped",modalContent)
        .name;

    function modalContent() {
        return {
            restrict:'C',
            link:function(scope,el,attr){
                var text = "";
                if(el.attr("tooltip")){
                    text = el.attr("tooltip");
                }else if(el.attr("title")){
                    text = el.attr("title");
                    el.removeAttr("title");
                }

                if(!el.attr("data-tooltip"))
                    el.attr("data-tooltip",text);
                
                setTimeout(function(){
                    $('.tooltipped').tooltip({delay: 50});
                },1);
            }
        }
    }

})();