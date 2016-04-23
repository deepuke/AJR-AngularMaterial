(function() {

	'use strict';

	/**
	 * @ngdoc function
	 * @name amV01App.controller:MaincontrollerCtrl
	 * @description
	 * # MaincontrollerCtrl
	 * Controller of the amV01App
	 */
	angular.module('amV01App.components.login').directive('lnLogin', lnLoginDirective);

	function lnLoginDirective() {
		var directive = {
			restrict : 'EA',
			replace : true,
			templateUrl : 'scripts/components/login/login.html',
			scope : {},
			controller : 'loginCtrl',
			controllerAs : 'ctrl',
			bindToController : true
		};

		return directive;
	}

})();
