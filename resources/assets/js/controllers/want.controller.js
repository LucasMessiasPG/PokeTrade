(function () {
    'use strict';

    angular
        .module('pokecard.controller')
        .controller('WantController', WantController);

    WantController.$inject = ['SearchService','UserService'];
    function WantController(SearchService,UserService) {
        var want = this;
        want.isMy = isMy;
        want.send = send;


        init();

        //////////////

        function init(){
            SearchService.wants()
                .then(function(response){
                    want.list = response.data;
                });
        }

        function isMy(user_card){
            var user = UserService.checkLogin();
            if(!user)
                return false;

            return user.id_user == user_card.id_user;

        }

        function send(item){
            UserService.sendWant(item.id_want)
                .then(function(response){
                    console.log(response);
                })
        }

    }
})();