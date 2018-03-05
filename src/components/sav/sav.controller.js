(function () {
    'use strict';

    angular
        .module('app')
        .controller('SavController', SavController);

    SavController.$inject = ['$rootScope', '$location', 'DataService','$routeParams'];
    function SavController($rootScope, $location, DataService, $routeParams) {
        var abn = this;
        abn.loadAlbumData = loadAlbumData;
        abn.albumId = $routeParams.param;
        abn.openSingleImg = openSingleImg;
        abn.showImageLayer = false;
        loadAlbumData();
        
        
        function loadAlbumData(){
            console.log('loading single album data');
            DataService.getSingleAlbumData()
	            .then(function (res) {
	            	console.log('data is..', res);
	            	abn.savData = res.entities;
	            });
        }
        
        function openSingleImg(openSingleImg){
        	console.log('sdfasdf',openSingleImg);
        	angular.element(document.getElementById('box'));
        	abn.showImageLayer = true;
        }
    }

})();