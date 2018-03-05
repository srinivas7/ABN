(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location'];
    function LoginController($location) {
        var abn = this;

        abn.login = login;
        abn.hi = hi;

        function login() {
            abn.dataLoading = true;
            $location.path('/home');
        };
        
        function hi(){
            console.log('hi');
        }
    }

})();
