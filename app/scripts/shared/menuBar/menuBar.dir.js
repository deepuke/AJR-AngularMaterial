(function() {

	'use strict';

	/**
	 * @ngdoc function
	 * @name amV01App.controller:MaincontrollerCtrl
	 * @description
	 * # MaincontrollerCtrl
	 * Controller of the amV01App
	 */
	angular.module('amV01App.shared.menuBar').directive('lnMenuBar', menuBarDirective);

	function menuBarDirective() {
		var directive = {
			restrict : 'EA',
			replace : true,
			templateUrl : 'scripts/shared/menuBar/menuBar.html',
			scope : {},
			controller : 'menuBarCtrl',
			controllerAs : 'ctrl',
			bindToController : true
		};

		return directive;
	}

})();
