(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope'];
    function HomeController($rootScope) {
        var abn = this;
        abn.some = some;
        some()

        function some(){
            console.log('on load')
        }

    }

})();