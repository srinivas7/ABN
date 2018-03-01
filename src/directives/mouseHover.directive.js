(function () {
	'use strict';
	
	angular
    .module('app')
    .directive('mouseHoverDirective', MouseHoverDirective);
	
	MouseHoverDirective.$inject = ['$rootScope'];
	
	function MouseHoverDirective($rootScope) {
		return {
		    restrict: 'C',
		    transclude: 'true',
		    link: function(scope, element, attr){
		          cosnole.log('from link function', attr);
		    }
		  };
    }
});
