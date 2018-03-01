(function () {
    'use strict';

    angular
        .module('app')
        .factory('DataService', DataService);

    DataService.$inject = ['$http', '$cookies', '$rootScope', '$timeout'];
    
    function DataService($http, $cookies, $rootScope, $timeout, UserService) {
    	 var service = {};
    	 
    	 service.login = login;
    	 service.getAlbumnsData = getAlbumnsData;
    	 
    	 return service;
    	 
    	 function login(){
    		 console.log('need to create login service');
    	 }
    	 
    	 function getAlbumnsData(){
    		 return $http.get('./src/assets/albums.json')
             .then(
                     function(response){
                         return response.data;
                     }, 
                     function(errResponse){
                         console.error('Error while fetching users');
                         return errResponse;
                     }
             );
    	 }
    	 
    }
    

    

})();