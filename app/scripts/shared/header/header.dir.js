(function() {

	'use strict';

	angular.module('amV01App.shared.header').directive('lnHeader', lnHeaderDirective);

	function lnHeaderDirective() {
		var directive = {
			restrict : 'EA',
			replace : true,
			templateUrl : 'scripts/shared/header/header.html',
			scope : {},
			controller : 'menuBarCtrl',
			controllerAs : 'ctrl',
			bindToController : true
		};

		return directive;
	}

})();
