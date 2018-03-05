(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngCookies'])
        .config(config)
        // .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
    	// $locationProvider.html5Mode(true);
    	
        $routeProvider
            .when('/home', {
                controller: 'HomeController',
                templateUrl: './src/components/home/home.view.html',
                controllerAs: 'abn'
            })

            .when('/some', {
                controller: 'SomeController',
                templateUrl: './src/components/some/some.view.html',
                controllerAs: 'abn'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: './src/components/login/login.view.html',
                controllerAs: 'abn'
            })
            
            .when('/', {
                controller: 'LoginController',
                templateUrl: './src/components/login/login.view.html',
                controllerAs: 'abn'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: './src/components/register/register.view.html',
                controllerAs: 'abn'
            })
            
            .when('/sav/:id', {
                controller: 'SavController',
                templateUrl: './src/components/sav/sav.view.html',
                controllerAs: 'abn'
            })

            .otherwise({ redirectTo: '/login' });
    }

    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
    function run($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        // $rootScope.$on('$locationChangeStart', function (event, next, current) {
        //     // redirect to login page if not logged in and trying to access a restricted page
        //     var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
        //     var loggedIn = $rootScope.globals.currentUser;
        //     if (restrictedPage && !loggedIn) {
        //         $location.path('/login');
        //     }
        // });
    }

})();