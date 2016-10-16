(function () {
    'use strict';

    angular
        .module('pokecard.controller')
        .controller('WantController', WantController);

    WantController.$inject = ['SearchService','UserService','$scope'];
    function WantController(SearchService,UserService,$scope) {
        var want = this;
        want.isMy = isMy;
        want.send = send;
        want.have = have;


        init();

        //////////////

        function init(){
            SearchService.wants()
                .then(function(response){
                    want.list = response.data;
                });
        }

        function isMy(user_card){
            var user = UserService.user;
            if(!user)
                return false;

            return user.id_user == user_card.id_user;

        }

        function send(item){
            UserService.sendWant(item.id_want)
                .then(function(response){
                    if(response.status == 'success') {
                        want.list.splice(want.list.indexOf(item), 1);
                    }
                })
        }

        function have(status) {
            var filter;
            if(status) {
                filter = {
                    have: '1'
                };
            }else{
                filter = {}
            }
            SearchService.wants(filter)
                .then(function(response){
                    want.list = response.data;
                });
        }

    }
})();