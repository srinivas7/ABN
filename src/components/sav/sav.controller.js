(function () {
    'use strict';

    angular
        .module('app')
        .controller('SavController', SavController);

    SavController.$inject = ['$rootScope', '$location'];
    function SavController($rootScope, $location) {
        var abn = this;
        abn.loadAlbumData = loadAlbumData;
        loadAlbumData();
        
        
        function loadAlbumData(){
            console.log('loading single album data');
//            DataService.getAlbumnsData()
//	            .then(function (res) {
//	            	console.log('data is..', res);
//	            	abn.albumsData = res.entityMap.collectionList;
//	            });
        }
    }

})();