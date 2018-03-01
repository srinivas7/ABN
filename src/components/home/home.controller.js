(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope', 'DataService'];
    function HomeController($rootScope, DataService) {
        var abn = this;
        abn.loadAlbumsData = loadAlbumsData;
        abn.albumsData = {};
        loadAlbumsData();
        abn.albumHover = albumHover;
        abn.albumLeave = albumLeave;

        function loadAlbumsData(){
            console.log('loading albums data');
            DataService.getAlbumnsData()
	            .then(function (res) {
	            	console.log('data is..', res);
	            	abn.albumsData = res.entityMap.collectionList;
	            });
        }
        
        function albumHover(event){
        	console.log('mouse hover', event);
        	event.currentTarget.getAttribute('id');
        	var myEl = angular.element( document.querySelector( 'img') );
        	myEl.next().addClass('showAlbumName');
        	//myEl[0].nextElementSibling.addClass('showAlbumName');
        	//myEl.addClass('hovered');
        }
        
        function albumLeave(event){
        	console.log('mouse leave', event);
        	var myEl = angular.element( document.querySelector( 'img') );
        	//myEl[0].nextElementSibling.removeClass('showAlbumName');
        	myEl.next().removeClass('showAlbumName');
        }

    }

})();