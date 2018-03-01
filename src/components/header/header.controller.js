(function () {
    'use strict';

    angular
        .module('app')
        .controller('SomeController', SomeController);

    SomeController.$inject = ['$location'];
    function SomeController($location) {
        var abn = this;
        abn.hi = hi;

        function hi(){
            console.log('hi');
            console.log('test');
        }
    }

})();
