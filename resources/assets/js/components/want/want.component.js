(function(){
	"use strict";

	module.exports = angular.module("pokecard.want.module",[
		require('../../services/search.service'),
		require('../../services/user.service'),
        require('../../common/list/list.component'),
        require('../../directives/materialize'),

	])
		.component("pokeWant",{
		  template: /*@ngInject*/ function($templateCache){
		      return $templateCache.get("want/want.html");
		  },
		  controller: controller,
		  controllerAs: "want"
	   })
        .name;

	/*@ngInject*/
	function controller(SearchService,UserService,$scope){
		var want = this;
        want.send = send;
        want.have = have;


        init();

        //////////////

        function init(){
            want.user = UserService.user;
            want.url = '/api/card/wants';
            // SearchService.wants()
                // .then(function(response){
                    // want.list = response.data;
                // });
        }

        function send(item){
            UserService.sendWant(item.id_want)
                .then(function(response){
                    if(response.status == 'success') {
                        if(!want.filter)
                            want.filter = {};
                        want.filter.refresh = true;
                    }
                });
        }

        function have(status) {
            if(status)
                want.filter = {
                    have: 1
                };
            else
                want.filter = {};
        }

	}

})();