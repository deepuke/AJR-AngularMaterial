(function() {

	'use strict';

	angular.module('amV01App.shared.input').directive('lnInput', lnInputDirective);

	function lnInputDirective() {
		var directive = {
			restrict : 'EA',
			replace : true,
			templateUrl : 'scripts/shared/input/input.html',
			scope : {},
			controller : 'menuBarCtrl',
			controllerAs : 'ctrl',
			bindToController : true
		};

		return directive;
	}

})();
