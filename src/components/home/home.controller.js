(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope', '$location', 'DataService'];
    function HomeController($rootScope, $location, DataService) {
        var abn = this;
        abn.loadAlbumsData = loadAlbumsData;
        abn.albumsData = {};
        loadAlbumsData();
        abn.albumHover = albumHover;
        abn.albumLeave = albumLeave;
        abn.openAlbum = openAlbum;

        function loadAlbumsData(){
            console.log('loading albums data');
            DataService.getAlbumnsData()
	            .then(function (res) {
	            	console.log('data is..', res);
	            	abn.albumsData = res.entityMap.collectionList;
	            });
        }
        
        function albumHover(event){
        	var myEl = angular.element(event.currentTarget.getElementsByClassName('middle'));
        	myEl.addClass('showAlbumName');
        	myEl.parent().addClass('addBorder');
        }
        
        function albumLeave(event){
        	var myEl = angular.element(event.currentTarget.getElementsByClassName('middle'));
        	myEl.removeClass('showAlbumName');
        	myEl.parent().removeClass('addBorder');
        }
        
        function openAlbum(albumId){
        	console.log(albumId);
        	$location.path('/sav');
        }

    }

})();